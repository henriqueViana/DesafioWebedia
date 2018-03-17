import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Hamburger from '../../components/hamburger/Hamburger';
import Logo from '../../components/logo/Logo';
import Menu from '../menu/Menu';
import './header.css';


class Header extends Component {

    render() {
        return(
            <header className="header">
                <MediaQuery maxWidth={480}>
                    <div className="header__mobile">
                        <Hamburger />
                        <Logo />
                        <Menu />
                    </div>
                </MediaQuery>

                <div className="header__desktop">
                    
                </div>
            </header>
        );
    }
}

export default Header;
