import React, { Component }from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
            <div className="Header">
                   <header>
                       <nav>
                           <ul className="navbar">
                               <li><NavLink to={'/'} exact className="active" activeStyle={{color: 'red', textDecoration: 'underline'}}>Home</NavLink></li>
                               <li><NavLink to={'/contact'} className="active" activeStyle={{color: 'red', textDecoration: 'underline'}}>Contact</NavLink></li>
                               <li><NavLink to={'/service'} className="active" activeStyle={{color: 'red', textDecoration: 'underline'}}>Service</NavLink></li>
                               <li><NavLink to={'/team'} className="active" activeStyle={{color: 'red', textDecoration: 'underline'}}>Team</NavLink></li>
                          </ul>
                       </nav>
                   </header>
           </div>
        )}}

export default Header;
    