import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import Home from './house.svg';
import Burger from './hamburger.svg';
import Group from './team.svg';




function Navigation() {
  return (
    <div>
    
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
     <section id="nav">
     <ul> 
    
     <li><div style={{textAlign:"center", paddingTop:'10px'}}><img src={Home} width="30px" alt="logo"/></div><NavLink to="/">Home</NavLink></li>
     <li><div style={{textAlign:"center", paddingTop:'10px'}}><img src={Group} width="30px" alt="logo"/></div><NavLink to="/about">About</NavLink></li>
     <li><div style={{textAlign:"center", paddingTop:'10px'}}><img src={Burger} width="30px" alt="logo"/></div><NavLink to="/menu">Menu</NavLink></li>
     
     </ul>
     </section>




    </div>
  );
}

export default Navigation;