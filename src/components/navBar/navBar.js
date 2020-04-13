import React from 'react';

function NavBar() {
  return (
    <nav id="main-nav" className="navbar navbar-expand-sm" role="navigation">
    <div id="nav-icon4" className="">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div className="container justify-content-around">
      <div className="navbar-nav ">
        <div  className="home nav-link nav-item active">首頁</div>
        <div  className="menu nav-link nav-item">美味菜單</div>
        <div  className="about nav-link nav-item">關於我們</div>
        <div  className="delivery nav-link nav-item">訂餐外送</div>
      </div>
    </div>
  </nav>
  );
}

export default NavBar;