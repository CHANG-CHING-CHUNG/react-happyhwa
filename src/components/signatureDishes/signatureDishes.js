import React from 'react';
import braisedPorkRice from '../../images/dishes/魯肉飯1.jpg';
import soyStewedPorkRice from '../../images/dishes/控肉飯.jpg';
import marlinFlossRice from '../../images/dishes/旗魚鬆飯.jpg';

function SignatureDishes() {

  return (
    <div id="signature-dishes">
      <div>
        <img alt="招牌控肉飯" className="dishes" src={ soyStewedPorkRice } />
        <span>招牌控肉飯</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla est perferendis expedita, sed a quaerat quis facilis dolor laborum id accusantium sit neque quas qui, officia reprehenderit eum voluptas! Placeat quos ab voluptas quod, aliquam molestias</p>
      </div>
      <div>
        <img alt="魯肉飯便當"  className="dishes" src={ braisedPorkRice } />
        <span>魯肉飯便當</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla est perferendis expedita, sed a quaerat quis facilis dolor laborum id accusantium sit neque quas qui, officia reprehenderit eum voluptas! Placeat quos ab voluptas quod, aliquam molestias</p>
        </div>
      <div>
        <img alt="大旗魚鬆飯"  className="dishes" src={ marlinFlossRice } />
        <span>大旗魚鬆飯</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla est perferendis expedita, sed a quaerat quis facilis dolor laborum id accusantium sit neque quas qui, officia reprehenderit eum voluptas! Placeat quos ab voluptas quod, aliquam molestias</p>
        </div>
    </div>
  );
}

export default SignatureDishes;