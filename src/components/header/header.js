import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import './header.css';
import logo from '../../logo.svg'

const Header = () => {
    return (
        <AppBar position="static">
            <span className="header-title">
                <img src={logo} className="App-logo" alt="logo" />
            </span>
        </AppBar>
    )
};

export default Header