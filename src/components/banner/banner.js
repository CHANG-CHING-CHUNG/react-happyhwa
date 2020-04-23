import React from 'react';
import BannerImg from '../../images/banner/banner4.jpg';

function Banner() {
  return (
    <div id="bannerBox">
      <img id="bannerImg" src={BannerImg} alt="banner"/>
    </div>
  );
}

export default Banner;