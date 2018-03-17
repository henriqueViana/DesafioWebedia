import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './logo.css';

export default props => (
    <Link to="/">
        <img className="logo" src={logo} alt="Logo Webedia"/>
    </Link>
);