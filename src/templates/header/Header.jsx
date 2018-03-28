import React, { Component } from 'react';
import { connect } from 'react-redux';

import Hamburger from '../../components/hamburger/Hamburger';
import Logo from '../../components/logo/Logo';
import Menu from '../menu/Menu';
import Search from '../../components/search/Search';
import './header.css';


class Header extends Component {
    render() {

        return(
            <header className="header">
                <div className={`bgMenuMobile ${this.props.openMenu}`}></div>
                <Hamburger />
                <Logo path='/'/>
                <Search />
                <Menu />
            </header>
        );
    }
}

const mapStateToProps = state => (
    {
      openMenu: state.mobileButtons.open_menu 
    }
);

export default connect(mapStateToProps)(Header);