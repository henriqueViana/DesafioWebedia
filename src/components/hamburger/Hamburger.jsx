import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openMenu } from '../../actions/mobileButtonsActions';

import './hamburger.css';

class Hamburger extends Component {

    render() {
        return (
            <div className="hamburger" onClick={this.props.openMenu}>
                <span className="hamburger__bar"></span>
                <span className="hamburger__bar"></span>
                <span className="hamburger__bar hamburger__bar--last"></span>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ openMenu }, dispatch));

export default connect(null, mapDispatchToProps)(Hamburger);
