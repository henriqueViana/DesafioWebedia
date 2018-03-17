import React from 'react';
import './hamburger.css';

export default props => (
    <div className="hamburguer" onClick={props.openMenu}>
        <span className="hamburguer__bar"></span>
        <span className="hamburguer__bar"></span>
        <span className="hamburguer__bar hamburguer__bar--last"></span>
    </div>
);