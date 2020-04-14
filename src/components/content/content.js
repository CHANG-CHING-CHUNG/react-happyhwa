import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menu from '../menu/menu';
import Home from '../home/home';
import Delivery from '../delivery/delivery';

function Content() {
  return (
    <div id="content-section">
      <Route path="/" exact component={Home}/>
      <Route path="/menu" component={Menu}/>
      <Route path="/delivery" component={Delivery}/>
    </div>
  );
}

export default Content;