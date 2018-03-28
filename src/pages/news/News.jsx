import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestNews } from '../../actions/newsActions';

import CardNews from '../../templates/cardNews/CardNews';
import Header from '../../templates/header/Header';

class News extends Component {

    componentWillMount() {
        this.props.requestNews('','destaques');
    }

    render() {
        if(this.props.requestData.length === 0) return (<div>Não há notícias</div>);
        return (
            <div className="wrapper">
                <Header />
                <div className="news container">
                    {this.props.requestData.articles.map((news, index) => {

                        let limited_title = '';
                        let limited_description = '';
                        
                        let col_number = (index < 2 || index > 4) ? 2 : 3;

                        if(news.title) {
                            limited_title = (index < 2 || index > 4) ? `${news.title.substr(0,40)} ...` : `${news.title.substr(0,20)} ...`;
                        }
                        
                        if(news.description) {
                            limited_description = (index < 2 || index > 4) ? `${news.description.substr(0,140)} ...` : `${news.description.substr(0,60)} ...`;
                        }

                        return <div className={`columns${col_number}`}>

                                    <CardNews 
                                        key={news._id}
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

                <div className="pagination">
                    
                </div>
            </div>
        );
    }
}

const mapStateToPros = state => ({ requestData: state.newsReducers.request_news});
const mapDispatchToProps = dispatch => bindActionCreators({requestNews}, dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(News); 