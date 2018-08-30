// Higher Order Component HOC - A component that renders another component
// Reuse code
// Render Hijacking
// Prop Manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This is the info: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is confidential infomation please don't share</p> }
            <WrappedComponent { ...props } />
        </div>
    )
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please Authenticate to view the site.</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info='Here are my details' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='Here are my details' />, document.getElementById('app'));