import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => (
    <header>
        <h1>Portfolio</h1> 
        <NavLink to="/" activeClassName="active-nav" exact={true}>Home</NavLink>
        <NavLink to="/portfolio" activeClassName="active-nav" exact={true}>Portfolio</NavLink>
        <NavLink to="/contact" activeClassName="active-nav" exact={true}>Contact</NavLink>
    </header>
);

export default NavMenu;