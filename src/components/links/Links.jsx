import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigateTo } from "trippler";

import { closeMenu } from '../../actions/mobileButtonsActions';
import { requestNews, routerChanged } from '../../actions/newsActions';

import './links.css';

class Links extends Component {

    render() {
        return (
            <ul className="menu__list container">
                <NavLink exact to="/noticias" className="menu__link"><li className="menu__item" onClick={this.props.routerChanged}>Notícias em destaque</li></NavLink>
                <NavLink exact to="/noticias/br" activeClassName="active" className="menu__link"><li className="menu__item" onClick={this.props.routerChanged}>Notícias do Brasil</li></NavLink>
                <NavLink exact to="/noticias/us" activeClassName="active" className="menu__link"><li className="menu__item" onClick={this.props.routerChanged}>Notícias do EUA</li></NavLink>
                <NavLink exact to="/noticias/ar" activeClassName="active" className="menu__link"><li className="menu__item" onClick={this.props.routerChanged}>Notícias da Argentina</li></NavLink>
                <NavLink exact to="/noticias/fr" activeClassName="active" className="menu__link"><li className="menu__item menu__item--last" onClick={this.props.routerChanged}>Notícias em França</li></NavLink>
            </ul>
        );
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ closeMenu, requestNews, routerChanged }, dispatch));

export default connect(null, mapDispatchToProps)(Links);

