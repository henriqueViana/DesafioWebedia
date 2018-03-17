import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

export default props => (
    <Link to="http://google.com">
        <img className="logo" src={logo} alt="Logo Webedia"/>
    </Link>
);