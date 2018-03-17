import React, { Component } from 'react';
import Hamburger from '../../components/hamburger/Hamburger';
import Logo from '../../components/logo/Logo';
import Menu from '../menu/Menu';
import './header.css';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { openMenu: false }

        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    openMenu() {
        this.setState({...this.state, openMenu: true});
    }

    closeMenu() {
        this.setState({...this.state, openMenu: false});
    }

    render() {

        let open = this.state.openMenu ? 'open' : '';

        return(
            <header className="header">
                <div className={`bgMenuMobile ${open}`}></div>
                <Hamburger openMenu={this.openMenu}/>
                <Logo />
                <Menu closeMenu={this.closeMenu} isOpen={this.state.openMenu}/>
            </header>
        );
    }
}

export default Header;
