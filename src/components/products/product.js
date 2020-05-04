import React from 'react';
import braisedPorkRice from '../../images/products/1.jpg'

function Product() {
  return (
      <div className="card-section">
        <img className="card-item" src={braisedPorkRice} alt="滷肉飯"/>
        <div className="card-text">
        <h1 className="card-hd">招牌滷肉飯</h1>
        <h2>$50</h2>
        <p className="card-p">
          本店招牌，甜而不膩，適合愛吃滷肉又怕太甜膩的你。
          本店招牌，甜而不膩，適合愛吃滷肉又怕太甜膩的你。
          本店招牌，甜而不膩，適合愛吃滷肉又怕太甜膩的你。
          本店招牌，甜而不膩，適合愛吃滷肉又怕太甜膩的你。
        </p>
        </div>
      </div>
  );
}

export default Product;