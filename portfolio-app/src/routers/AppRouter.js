import React from 'react';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import PortfolioPage from '../components/PortfolioPage';
import WorkItemPage from '../components/WorkItemPage';

import NotFoundPage from '../components/NotFoundPage';
import NavMenu from '../components/NavMenu';

const AppRouter = () => (
<BrowserRouter>
    <div>
        <NavMenu />
        <Switch>
            <Route path="/" component={ HomePage } exact={true} />
            <Route path="/portfolio" component={ PortfolioPage } exact={true} />
            <Route path="/portfolio/:id" component={ WorkItemPage } />
            <Route path="/contact" component={ ContactPage } />
            <Route component={ NotFoundPage } />
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;