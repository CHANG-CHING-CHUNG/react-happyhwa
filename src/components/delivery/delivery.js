import React from 'react';

class Delivery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }






  render() {
  return (
      <div className="delivery-page">
            <h1 id="hd-color">外送範圍查詢</h1>
            <p id="p-color">請輸入地址確認是否在外送範圍內</p>
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