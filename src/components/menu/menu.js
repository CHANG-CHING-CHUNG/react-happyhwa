import React from 'react';
import braisedPorkRice from '../../images/products/1.jpg';
import eatLogo from '../../images/logo/EAT.png'
import './menu.css';




function Menu() {

  return (
      <div id="menu" className="menu menu-padding">
        <header className="eat-logo">
         <img src={eatLogo} alt="" />
        </header>
        <div class="row">
          <div class="column">
            <img src={braisedPorkRice} alt="" />
            <div class="price">
              <h2>魯肉飯</h2>
              <span>$ 50</span>
            </div>
          </div>
          <div class="column">
            <img src={braisedPorkRice} alt="" />
            <div class="price">
              <h2>魯肉飯</h2>
              <span>$ 50</span>
            </div>
          </div>
          <div class="column">
            <img src={braisedPorkRice} alt="" />
            <div class="price">
              <h2>魯肉飯</h2>
              <span>$ 50</span>
            </div>
          </div>
          <div class="column">
            <img src={braisedPorkRice} alt="" />
            <div class="price">
              <h2>魯肉飯</h2>
              <span>$ 50</span>
            </div>
          </div>
          <div class="column">
            <img src={braisedPorkRice} alt="" />
            <div class="price">
              <h2>魯肉飯</h2>
              <span>$ 50</span>
            </div>
          </div>
          <div class="column">
            <img src={braisedPorkRice} alt="" />
            <div class="price">
              <h2>魯肉飯</h2>
              <span>$ 50</span>
            </div>
          </div>
          <div class="column">
            <img src={braisedPorkRice} alt="" />
            <div class="price">
              <h2>魯肉飯</h2>
              <span>$ 50</span>
            </div>
          </div>
          <div class="column">
            <img src={braisedPorkRice} alt="" />
            <div class="price">
              <h2>魯肉飯</h2>
              <span>$ 50</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Menu;