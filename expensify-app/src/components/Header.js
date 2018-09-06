import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="active-nav" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="active-nav" exact={true}>Create Expense</NavLink>
    </header>
);

export default Header;