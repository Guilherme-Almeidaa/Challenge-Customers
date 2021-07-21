import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthenticated } from './checkAutendicate';
import PageBegin from '../pages/PageBegin';


const token = localStorage.getItem('token');

function CheckLogged({ children, ...rest }) {

    console.log(isAuthenticated(token))
    return (
        <Route
            {...rest}
            render={() => (isAuthenticated(token) === false ? (
                <Switch>
                    {children}
                </Switch>
            ) : <PageBegin />)}
        />
    );
}

CheckLogged.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CheckLogged;