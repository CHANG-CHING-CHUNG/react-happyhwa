import React, { useEffect} from 'react';
import logo from '../../images/logo/黑皮驊ＬＯＧＯ.svg'
import $ from 'jquery';
import "./navbar.css";


function Navbar() {

  useEffect(() => {
    $('#navbar a, .btn').on('click', function(e) {
      if(this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top -70
          },
          800
        );
      }
    });
  })

  return (
      <div id="navbar" className="header-navbar">
        <img src={logo} alt=""/>
        <nav>
          <ul>
            <li><a  href="#home">首頁</a></li>
            <li><a  href="#icons">招牌菜</a></li>
            <li><a  href="#news">最新消息</a></li>
            <li><a  href="#menu">菜單</a></li>
            <li><a  href="#delivery">外送</a></li>
          </ul>
        </nav>
      </div>
  )
}

export default Navbar;