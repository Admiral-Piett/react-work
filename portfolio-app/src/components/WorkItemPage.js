import React from 'react';

const PortfolioPage = (props) => (
    <div>
        <h1>Project {props.match.params.id}</h1>
        <p>This is my project, with the id - {props.match.params.id}.</p>
    </div>
);

export default PortfolioPage;