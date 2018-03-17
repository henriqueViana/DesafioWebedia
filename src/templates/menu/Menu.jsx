import React from 'react';
import Links from '../../components/links/Links';
import './menu.css';

export default props => {

    let open = props.isOpen ? 'open' : '';

    return (
        <nav className={`menu ${open}`}>
            <Links closeMenu={props.closeMenu}/>
            <button className="menu__close" onClick={props.closeMenu}>X</button>          
        </nav>
    );
}