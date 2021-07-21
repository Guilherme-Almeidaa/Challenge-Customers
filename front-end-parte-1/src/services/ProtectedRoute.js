import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthenticated } from './checkAutendicate';


function ProtectedRoute({ children, ...rest }) {
const token = localStorage.getItem('token');


    return (
        <Route
            {...rest}
            render={() => (isAuthenticated(token) ? (
                <Switch>
                    {children}
                </Switch>
            ) : <Redirect to="/" />)}
        />
    );
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;