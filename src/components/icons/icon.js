import React from 'react';
import './icon.css';
import braisedPorkRice from '../../images/dishes/魯肉飯1.jpg';
import soyStewedPorkRice from '../../images/dishes/控肉飯.jpg';
import marlinFlossRice from '../../images/dishes/旗魚鬆飯.jpg';

function Icon() {
  return (
    <section id="icons" className="icons bg-light">
      <div className="flex-items">
        <div>
          <img src={braisedPorkRice} alt=""/>
          <div>
            <h3>招牌魯肉飯</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, corporis.</p>
          </div>
        </div>
        <div>
          <img src={soyStewedPorkRice} alt=""/>
          <div>
            <h3>招牌控肉飯</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, corporis.</p>
          </div>
        </div>
        <div>
          <img src={marlinFlossRice} alt=""/>
          <div>
            <h3>招牌旗魚鬆飯</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, corporis.</p>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Icon;