import React from 'react';
import { NavLink } from 'react-router-dom';

import './links.css';

export default props => (
    <ul className="menu__list container">
        <NavLink to="/noticias-em-destaque" activeClassName="active" className="menu__link"><li className="menu__item" onClick={props.closeMenu}>Notícias em destaque</li></NavLink>
        <NavLink to="/noticias-do-brasil" activeClassName="active" className="menu__link"><li className="menu__item" onClick={props.closeMenu}>Notícias do Brasil</li></NavLink>
        <NavLink to="/noticias-do-eua" activeClassName="active" className="menu__link"><li className="menu__item" onClick={props.closeMenu}>Notícias do EUA</li></NavLink>
        <NavLink to="/noticias-da-argentina" activeClassName="active" className="menu__link"><li className="menu__item" onClick={props.closeMenu}>Notícias da Argentina</li></NavLink>
        <NavLink to="/noticias-da-franca" activeClassName="active" className="menu__link"><li className="menu__item menu__item--last" onClick={props.closeMenu}>Notícias em França</li></NavLink>
    </ul>
);