import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changePagination, requestNews } from '../../actions/newsActions';

import './pagination.css';

class Pagination extends Component {

    constructor(props) {
        super(props);

        this.callMethods = this.callMethods.bind(this);
    }

    callMethods() {
        let path = window.location.href.split('/').slice(-1)[0];
        this.props.requestNews(this.props.searched, path, this.props.page)
        this.props.changePagination(this.props.page)
    }

    render() {
        let active = this.props.activePage == this.props.page ? 'active' : ''; 
        
        return (
            <button className={`pagination__button shadow ${active}`} onClick={this.callMethods}>
                {this.props.page < 10 ? `0${this.props.page}` : this.props.page}
            </button>
        );
    }
}

const mapStateToPros = state => ({ activePage: state.newsReducers.activePage });
const mapDispatchToProps = dispatch => bindActionCreators({ changePagination, requestNews }, dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(Pagination);
    
