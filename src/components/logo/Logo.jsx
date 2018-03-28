import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './logo.css';

export default props => {
    let blank = props.blank ? '_blank' : '';

    return (
        <Link to={props.path} target={blank} className="link-logo">
            <img className="logo" src={logo} alt="Logo Webedia"/>
        </Link>
    );
}
    