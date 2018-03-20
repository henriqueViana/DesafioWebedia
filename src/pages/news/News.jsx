import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CardNews from '../../templates/cardNews/CardNews';
import Header from '../../templates/header/Header';

const URL = 'https://newsapi.org/v2';
const APIKEY = '522990a48dc7422384ce014a0b36a341';
const LIMIT = 7;

class News extends Component {

    constructor(props) {
        super(props);

        this.state = { news: [], totalResult: 0 };
    }

    componentWillMount() {

        let country = this.getActiveCountry();

        axios.get(`${URL}/top-headlines?country=${country}&pageSize=${LIMIT}&apikey=${APIKEY}`)
            .then(res => {
                if(res.status === 200) {
                    this.setState({...this.state, news: res.data.articles, totalResult: res.data.totalResult})
                }
            });
    }

    getActiveCountry() {
        return this.props.match.params.id ? this.props.match.params.id : 'us';
    }

    render() {
        console.log(this.props.requestData);
        return (
            <div className="wrapper">
                <Header />
                <div className="news container">
                    {this.state.news.map((news, index) => {

                        let limited_title = '';
                        let limited_description = '';
                        
                        let col_number = (index < 2 || index > 4) ? 2 : 3;

                        if(news.title) {
                            limited_title = (index < 2 || index > 4) ? `${news.title.substr(0,40)} ...` : `${news.title.substr(0,20)} ...`;
                        }
                        
                        if(news.description) {
                            limited_description = (index < 2 || index > 4) ? `${news.description.substr(0,140)} ...` : `${news.description.substr(0,60)} ...`;
                        }

                        return <div class={`columns${col_number}`}>

                                    <CardNews 
                                        author={news.author} 
                                        title={limited_title}
                                        description={limited_description} 
                                        date={news.publishedAt}
                                        url={news.url}
                                        urlImage={news.urlToImage}
                                        index={index}
                                    />
                                </div>
                    })}
                </div>

                <div class="pagination">
                    
                </div>
            </div>
        );
    }
}

const mapStateToPros = state => ({ requestData: state.newsReducers.request_news});

export default connect(mapStateToPros)(News); 