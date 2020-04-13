import React from 'react';
import MobileSideBar from './components/mobileSidebar/mobileSideBar';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import FbIcon from './components/fbIcon/fbIcon';

function App() {
  return (
    <div id="main-content">
      <FbIcon/>
      <MobileSideBar/>
      <Header/>
      <NavBar/>
    </div>
  );
}

export default App;
