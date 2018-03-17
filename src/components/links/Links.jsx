import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <ul class="menu__list">
        <li className="menu__item"><Link to="/noticias-em-destaque">Notícias em destaque</Link></li>
        <li className="menu__item"><Link to="/noticias-do-brasil">Notícias do Brasil</Link></li>
        <li className="menu__item"><Link to="/noticias-do-eua">Notícias do EUA</Link></li>
        <li className="menu__item"><Link to="/noticias-da-argentina">Notícias da Argentina</Link></li>
        <li className="menu__item menu__item--last"><Link to="/noticias-da-franca">Notícias em França</Link></li>
    </ul>
);