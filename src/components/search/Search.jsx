import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { openSearch, closeSearch } from '../../actions/mobileButtonsActions';
import { changeSearched, requestNews } from '../../actions/newsActions';

import search from '../../assets/images/search.png';
import './search.css';

class Search extends Component {

    constructor(props) {
        super(props);

        this.keyHandler = this.keyHandler.bind(this);
    }

    keyHandler() {
        this.props.requestNews(this.props.searched);
    }

    render() {
        return (
            <div>
                <div className="search container">
                    <input type="text" className="search__input shadow" value={this.props.searched} onChange={this.props.changeSearched} onKeyUp={this.keyHandler}/>
                    <img className="search__icon--desktop" src={search} alt="Botão search"/>
                </div>
                <div className="search-mobile">
                    <img className="search__icon" src={search} alt="Botão search" onClick={this.props.openSearch}/>
                    <div className={`search__boxInput ${this.props.openSearchProp}`}>
                        <input type="text" className="search__input shadow" placeholder="Pesquisa" value={this.props.searched} onChange={this.props.changeSearched} onKeyUp={this.keyHandler}/>
                        <button className="search__close shadow" onClick={this.props.closeSearch}>X</button>    
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToPros = state => (
    { 
        openSearchProp: state.mobileButtons.open_search, 
        searched: state.newsReducers.searched
    }
);
const mapDispatchToProps = dispatch => (bindActionCreators({ openSearch, closeSearch, changeSearched, requestNews }, dispatch));

export default connect(mapStateToPros, mapDispatchToProps)(Search); 
