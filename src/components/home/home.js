import React from 'react';
import Banner from '../banner/banner';
import SignatureDishes from '../signatureDishes/signatureDishes';

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
    </div>
  );
}

export default Home;