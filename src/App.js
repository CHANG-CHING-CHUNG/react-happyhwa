import React from 'react';
import { HashRouter } from 'react-router-dom';
import MobileSideBar from './components/mobileSidebar/mobileSideBar';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import FbIcon from './components/fbIcon/fbIcon';
import Content from './components/content/content'

function App() {
  return (
    <HashRouter>
      <div id="main-content">
        <FbIcon/>
        <MobileSideBar/>
        <Header/>
        <NavBar/>
        <Content/>
      </div>
    </HashRouter>
  );
}

export default App;
