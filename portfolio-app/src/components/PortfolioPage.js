import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>My Work</h1>
        <p>Click the links below to check out my bad ass projects.</p>
        <Link to="portfolio/1">Project 1</Link>
        <Link to="portfolio/2">Project 2</Link>
    </div>
);

export default PortfolioPage;