import React from 'react';

function Delivery() {
  return (
    <div className="delivery-page">
          <h1 id="hd-color">外送範圍查詢</h1>
          <p id="p-color">請輸入地址確認是否在外送範圍內</p>
          <input type="text" id="autoinput" autocomplete="off" placeholder="輸入地址"/>
          <div class="span-box">
            <span id="check-address"></span>
            <span id="invalid"></span>
          </div>
          <div id="map">
          </div>
    </div>
  );
}

export default Delivery;