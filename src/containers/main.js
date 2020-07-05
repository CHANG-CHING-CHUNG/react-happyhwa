import React from 'react'
import Icon from '../components/icons/icon';
import News from '../components/news/news';
import Menu from '../components/menu/menu';
import Delivery from '../components/delivery/delivery';

function Main() {
  return (
    <main>
      <Icon/>
      <News/>
      <Menu/>
      <Delivery/>
    </main>
  );
}

export default Main;