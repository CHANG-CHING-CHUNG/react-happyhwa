import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import Menu from '../menu/menu';
import Home from '../home/home';
import Delivery from '../delivery/delivery';
import Login from '../login/login';

class Content extends React.Component {
 
  render() {
    
      return (
        <div id="content-section">
          <Switch>
            <Route path="/menu">
              <Menu/>
            </Route>
            <Route path="/delivery">
              <Delivery/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      );
  }
}

export default Content;