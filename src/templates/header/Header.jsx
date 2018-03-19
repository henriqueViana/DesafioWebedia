import React, { Component } from 'react';
import Hamburger from '../../components/hamburger/Hamburger';
import Logo from '../../components/logo/Logo';
import Menu from '../menu/Menu';
import Search from '../../components/search/Search';
import './header.css';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { openMenu: false, openSearch: false }

        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.openSearch = this.openSearch.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
    }

    openMenu() {
        this.setState({...this.state, openMenu: true});
    }

    closeMenu() {
        this.setState({...this.state, openMenu: false});
    }

    openSearch() {
        this.setState({...this.state, openSearch: true});
    }

    closeSearch() {
        this.setState({...this.state, openSearch: false});
    }

    render() {

        let open = this.state.openMenu ? 'open' : '';

        return(
            <header className="header">
                <div className={`bgMenuMobile ${open}`}></div>
                <Hamburger openMenu={this.openMenu}/>
                <Logo />
                <Search openSearch={this.openSearch} closeSearch={this.closeSearch} isOpenSearch={this.state.openSearch}/>
                <Menu closeMenu={this.closeMenu} isOpen={this.state.openMenu}/>
            </header>
        );
    }
}

export default Header;
