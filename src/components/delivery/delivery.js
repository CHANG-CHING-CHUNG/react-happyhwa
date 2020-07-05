import React from 'react';
import './delivery.css';

class Delivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      happyHwa:{lat:24.816500, lng:121.026738}
    }
    
    this.mapDiv = React.createRef();
    this.checkAddress = React.createRef();
    this.invalid = React.createRef();
    this.input = React.createRef();
  }

  componentDidMount() {
      if(window.google) {
        this.loadMap();
      }
  }

  loadMap = () => {
    const that = this;
    const map = new window.google.maps.Map(this.mapDiv.current,
      {
        center:this.state.happyHwa,
        zoom:15
      });
    const happyHwaMarker = new window.google.maps.Marker({
      position: this.state.happyHwa,
      map:map,
      draggable:false
    });
    let  LatLngList = [this.state.happyHwa];
    let extendBounds = new window.google.maps.LatLngBounds();
    const computeDistanceBetween = window.google.maps.geometry.spherical;
    let addressMarker;

    const circleRange = new window.google.maps.Circle({
      strokeColor:'#313131',
      strokeOpacity:0.3,
      fillColor:'#fff',
      fillOpacity:0.4,
      map:map,
      center:this.state.happyHwa,
      radius:1000
    });

    circleRange.bindTo('center', happyHwaMarker, 'position');

    const autoSearch = new window.google.maps.places.Autocomplete(this.input.current);
    autoSearch.setFields(['geometry']);

    autoSearch.setComponentRestrictions(
      {'country': ['tw']});
    
    function checkRange(computeDistance, addsMarker, markerCenter) {
      if(1000 > computeDistance.computeDistanceBetween(addsMarker.getPosition(), markerCenter.getPosition())) {
        that.checkAddress.current.innerText = "你所處的地方在外送範圍內唷~!";
      } else {
        that.checkAddress.current.innerText = `很可惜~你所在的位置在服務範圍之外>"<`;
      }
    }

    function setAddressMarker(location) {
      if(addressMarker) {
        addressMarker.setMap(null);
        }

         addressMarker = new window.google.maps.Marker({
          map:map,
          position:(Array.isArray(location)) ? location[0].geometry.location : location,
          animation:window.google.maps.Animation.DROP
        });

        LatLngList.push(addressMarker.position);

        for(let i = 0; i < LatLngList.length; i++) {
          extendBounds.extend(LatLngList[i]);
        }
        map.fitBounds(extendBounds);

        LatLngList = [that.state.happyHwa];

        extendBounds = new window.google.maps.LatLngBounds();
        checkRange(computeDistanceBetween, addressMarker,happyHwaMarker);
      }

      function invalidMessage() {
        that.invalid.current.innerText = '請輸入有效的地址!';
        setTimeout(() => that.invalid.current.innerText = '', 2500);
      }

      autoSearch.addListener('place_changed', function() {
        const place = autoSearch.getPlace();
        if(!place.geometry) {
          invalidMessage();
        } else {
          setAddressMarker(place.geometry.location)
          }
      })
  }




  render() {
  return (
      <div id="delivery">
            <h1>外送範圍查詢</h1>
            <p>請輸入地址確認是否在外送範圍內</p>
            <input ref={this.input} type="text" id="autoinput" autoComplete="off" placeholder="輸入地址"/>
            <div className="span-box">
              <span id="check-address" ref={this.checkAddress}></span>
              <span id="invalid" ref={this.invalid}></span>
            </div>
            <div id="map" ref={this.mapDiv}>
            </div>
      </div>
    );
  }
}

export default Delivery;