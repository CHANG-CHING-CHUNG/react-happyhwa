import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MobileSideBar from './components/mobileSidebar/mobileSideBar';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import FbIcon from './components/fbIcon/fbIcon';
import Content from './components/content/content'

function App() {
  return (
    <Router>
      <div id="main-content">
        <FbIcon/>
        <MobileSideBar/>
        <Header/>
        <NavBar/>
        <Content/>
      </div>
    </Router>
  );
}

export default App;
