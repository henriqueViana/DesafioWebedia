import React from 'react';
import './hamburger.css';

export default props => (
    <div className="hamburger" onClick={props.openMenu}>
        <span className="hamburger__bar"></span>
        <span className="hamburger__bar"></span>
        <span className="hamburger__bar hamburger__bar--last"></span>
    </div>
);