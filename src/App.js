import React from 'react';
import { HashRouter } from 'react-router-dom';
import MobileSideBar from './components/mobileSidebar/mobileSideBar';
import Header from './components/header/header';
import NavBar from './components/navBar/navBar';
import FbIcon from './components/fbIcon/fbIcon';
import Content from './components/content/content';
import Footer from './components/footer/footer';

class App extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      sideBarOpen:false
    }

  }

  openSideBar = () => {
    if(this.state.sideBarOpen) {
      this.setState({sideBarOpen: false});
    } else {
      this.setState({sideBarOpen: true});
    }
    
  }
  render() {
    let sideBarStyle = { width: "0px" }; 
    if(this.state.sideBarOpen) {
      sideBarStyle = { width: "150px"};
    } else {
      sideBarStyle = { width: "0px" }; 
    }

    return  (
        <HashRouter>
          <div id="main-content">
            <FbIcon/>
            <MobileSideBar sideBarStyle={ sideBarStyle }/>
            <Header/>
            <NavBar openSideBar={this.openSideBar}/>
            <Content/>
            <Footer/>
          </div>
        </HashRouter>
      );
  }
}

export default App;
