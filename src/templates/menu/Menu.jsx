import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closeMenu } from '../../actions/mobileButtonsActions';

import Navigation from '../../components/navigation/Navigation';
import './menu.css';

class Menu extends Component {

    render() {
        return (
            <nav className={`menu shadow ${this.props.openMenuProp}`}>
                <Navigation />
                <button className="menu__close" onClick={this.props.closeMenu}>X</button>          
            </nav>
        );
    }
}

const mapStateToProps = state => ({ openMenuProp: state.mobileButtons.open_menu });
const mapDispatchToProps = dispatch => (bindActionCreators({ closeMenu }, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Menu);