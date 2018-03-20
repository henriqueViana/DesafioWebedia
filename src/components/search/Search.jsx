import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openSearch, closeSearch } from '../../actions/mobileButtonsActions';

import search from '../../assets/images/search.png';
import './search.css';

class Search extends Component {

    render() {
        return (
            <div className="search">
                <img className="search__icon" src={search} alt="Botão search" onClick={this.props.openSearch}/>
                <div class={`search__boxInput ${this.props.openSearchProp}`}>
                    <input type="text" className="search__input shadow" placeholder="Pesquisa"/>
                    <button className="search__close shadow" onClick={this.props.closeSearch}>X</button>    
                </div>
            </div>
        );
    }
}

const mapStateToPros = state => ({ openSearchProp: state.mobileButtons.open_search});
const mapDispatchToProps = dispatch => (bindActionCreators({ openSearch, closeSearch }, dispatch));

export default connect(mapStateToPros, mapDispatchToProps)(Search); 
