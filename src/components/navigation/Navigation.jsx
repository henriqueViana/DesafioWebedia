import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeMenu } from '../../actions/mobileButtonsActions';
import { requestNews, routerChanged } from '../../actions/newsActions';

import './navigation.css';

class Navigation extends Component {

    render() {
        return (
            <ul className="menu__list container">
                <NavLink exact to="/noticias/destaques" activeClassName="active" className="menu__link" onClick={this.props.closeMenu}><li className="menu__item" onClick={() => this.props.requestNews('','destaques')}>Notícias em destaque</li></NavLink>
                <NavLink  to="/noticias/br" activeClassName="active" className="menu__link" onClick={this.props.closeMenu}><li className="menu__item" onClick={() => this.props.requestNews('','br')}>Notícias do Brasil</li></NavLink>
                <NavLink  to="/noticias/us" activeClassName="active" className="menu__link" onClick={this.props.closeMenu}><li className="menu__item" onClick={() => this.props.requestNews('','us')}>Notícias do EUA</li></NavLink>
                <NavLink  to="/noticias/ar" activeClassName="active" className="menu__link" onClick={this.props.closeMenu}><li className="menu__item" onClick={() => this.props.requestNews('','ar')}>Notícias da Argentina</li></NavLink>
                <NavLink  to="/noticias/fr" activeClassName="active" className="menu__link" onClick={this.props.closeMenu}><li className="menu__item menu__item--last" onClick={() => this.props.requestNews('','fr')}>Notícias em França</li></NavLink>
            </ul>
        );
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ closeMenu, requestNews, routerChanged }, dispatch));

export default connect(null, mapDispatchToProps)(Navigation);

