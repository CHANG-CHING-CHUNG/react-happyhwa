import React from 'react';
import coffee from '../../images/news/coffee-cup.jpg'
import './news.css';

function News() {
  return (
    <section id="news" className="news flex-columns">
      <div className="row">
        <div className="column">
          <div className="column-1">
            <img src={coffee} alt="" />
          </div>
        </div>
        <div className="column">
          <div className="column-2">
            <h2>最新消息</h2>
            <ul>
              <li>外送優惠實施中</li>
              <li>外送優惠實施中</li>
              <li>外送優惠實施中</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;