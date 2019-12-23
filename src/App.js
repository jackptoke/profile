import React from 'react';
import './styles/nav-style.css';
import './App.css';
import Menu from './Menu';
import logo from './images/logo.svg';
import {Router} from '@reach/router';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Services from './Services';

function App() {
  return (
    <div className="App">
      <div class="logo">
        <img src={logo} alt="Logo of Jack Toke" />
      </div>
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Services path="/services" />
        <Contacts path="/contacts" />
      </Router>
      <Menu />
    </div>
  );
}

const jsMenuNode = document.querySelector('.menu');
const demoMenu = new Menu ({
  menuNode: jsMenuNode
});

function callMenuToggle(event) {
  demoMenu.toggleMenuState('menu_activated');
}

export default App;
