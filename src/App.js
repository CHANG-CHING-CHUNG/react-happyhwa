import React from 'react';
import Header from './components/header/header';
import Main from './containers/main';
import Navbar from './components/navbar/navbar';


class App extends React.Component {

  render() {
    return  (
        <div>
          <Navbar/>
          <Header/>
          <Main/>
        </div>
      );
  }
}

export default App;
