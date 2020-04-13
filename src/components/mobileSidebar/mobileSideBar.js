import React from 'react';

function MobileSideBar() {
  return (
    <div className="mobile-sidebar">
      <div  className="home sidebar nav-link nav-item active" >首頁</div>
      <div  className="menu sidebar nav-link nav-item">美味菜單</div>
      <div  className="about sidebar nav-link nav-item">關於我們</div>
      <div  className="delivery sidebar nav-link nav-item">訂餐外送</div>
    </div>
  );
}

export default MobileSideBar;