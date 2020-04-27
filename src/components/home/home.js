import React from 'react';
import Banner from '../banner/banner';
import SignatureDishes from '../signatureDishes/signatureDishes';
import { NavLink } from 'react-router-dom';

function getDates() {
  const get = new Date();
  const getYear = get.getFullYear();
  const getMonth = get.getMonth();
  const getDate = get.getDate();

  return `${getYear}-${getMonth+1}-${getDate}`;
}

const news = [
  { id:1,
    date:getDates(),
    paragraph:"滿1200免運外送優惠~!"
  }
  ,
  { id:2,
    date:getDates(),
    paragraph:"每星期日公休~!"
  }
  ,
  { id:3,
    date:getDates(),
    paragraph:"美味好吃的控肉飯新上架~!"
  }
];

function NewsLists() {
  return (
    news.map((post) => {
      return (
        <li className="newsLists" key={post.id}><strong>{post.date}</strong><p className="newsText">{post.paragraph}</p></li>
      );
    })
  );
}

function EmbeddedMap() {
  return (
    <div id="tinyMap">
      <div class="map-title">
        <h2>歡迎來黑皮驊</h2>
        <p>
          302新竹縣竹北市嘉興路150號
          <br/>
          外送專線:03-658-7112
          <br/>
          <NavLink rel="noopener noreferrer" target="_blank" to="/delivery" id="tinyMapNav">外送範圍查詢</NavLink>
        </p>
      </div>
        <iframe title="location" id="embeddedMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.385719853299!2d121.02454501547736!3d24.816479484074744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346836f95f91baad%3A0x631ee44ee1f5867a!2z6buR55qu6amK6a2v6IKJ6aOvSEFQUFktSFdB!5e0!3m2!1szh-TW!2stw!4v1587995609194!5m2!1szh-TW!2stw"  frameborder="0" style={ { border: "0" } } allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  );
}


function Home() {
  return (
    <div id="home-page">
      <Banner/>
      <div id="news">
       <h1 id="news-header">最新消息</h1>
       <ul id="news-wrapper">
         <NewsLists/>
       </ul>
      </div>
       <SignatureDishes/>
       <EmbeddedMap/>
    </div>
  );
}

export default Home;