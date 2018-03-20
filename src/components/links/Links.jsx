import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeMenu } from '../../actions/mobileButtonsActions';
import { requestNews } from '../../actions/newsActions';

import './links.css';

class Links extends Component {

    render() {
        return (
            <ul className="menu__list container">
                <NavLink to="/noticias" className="menu__link"><li className="menu__item">Notícias em destaque</li></NavLink>
                <NavLink to="/noticias/br" activeClassName="active" className="menu__link"><li className="menu__item" onClick={this.props.requestNews}>Notícias do Brasil</li></NavLink>
                <NavLink to="/noticias/us" activeClassName="active" className="menu__link"><li className="menu__item" onClick={this.props.requestNews}>Notícias do EUA</li></NavLink>
                <NavLink to="/noticias/ar" activeClassName="active" className="menu__link"><li className="menu__item" onClick={this.props.requestNews}>Notícias da Argentina</li></NavLink>
                <NavLink to="/noticias/fr" activeClassName="active" className="menu__link"><li className="menu__item menu__item--last" onClick={this.props.requestNews}>Notícias em França</li></NavLink>
            </ul>
        );
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ closeMenu, requestNews }, dispatch));

export default connect(null, mapDispatchToProps)(Links);

