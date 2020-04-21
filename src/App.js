import React from 'react';
import { HashRouter } from 'react-router-dom';
import MobileSideBar from './components/mobileSidebar/mobileSideBar';
import NavBar from './components/navBar/navBar';
import FbIcon from './components/fbIcon/fbIcon';
import Content from './components/content/content';
import Footer from './components/footer/footer';

class App extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      sideBarOpen:false,
    }

  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  sideBarControl = () => {
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
        <HashRouter
        hashType={"slash"}
        >
          <div id="main-content">
            <FbIcon/>
            <MobileSideBar sideBarStyle={ sideBarStyle } sideBarControl={this.sideBarControl}/>
            <NavBar sideBarControl={this.sideBarControl}/>
            <Content/>
            <Footer/>
          </div>
        </HashRouter>
      );
  }
}

export default App;
