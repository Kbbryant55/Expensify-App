//Higher Order Component (HOC) that renders another component
//reuse code
//Render hijacking
//prop manipulation
//Abstract state

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
            { props.isAdmin && <p>This is private info. Please don't share</p> }      
            <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ?  <WrappedComponent {...props}/> : <p>Please login using proper credentials</p> }      
        </div>
    );
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
// requireAuthentication




ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are details"/>, document.getElementById('app'));