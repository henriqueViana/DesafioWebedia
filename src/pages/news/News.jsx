import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { requestNews } from '../../actions/newsActions';

import CardNews from '../../templates/cardNews/CardNews';
import Header from '../../templates/header/Header';
import Footer from '../../templates/footer/Footer';
import Pagination from '../../components/pagination/Pagination';

import './news.css';

class News extends Component {

    componentWillMount() {
        this.props.requestNews('','destaques');
    }

    setColumnNumber(index) {
        return (index < 2 || index > 4) ? 2 : 3;
    }

    configLimitCharacter(news, index) {
        let title = '';
        let description = '';

        if(news.title) {
            title = (index < 2 || index > 4) ? `${news.title.substr(0,40)} ...` : `${news.title.substr(0,20)} ...`;
        }
        
        if(news.description) {
            description = (index < 2 || index > 4) ? `${news.description.substr(0,140)} ...` : `${news.description.substr(0,60)} ...`;
        }

        return { title, description };
    }

    configTotalPage(totalResults) {
        let result = Math.round(totalResults / 7);

        if(result > 100) result = 100;
        if(result < 5) result = 5

        return result;
    }
    

    render() {
        let totalPages = this.configTotalPage(this.props.requestData.totalResults);

        if(this.props.requestData.length === 0) {
            return (
                <div className="wrapper">
                    <Header />
                    <div className="notNews">Não há notícias</div>
                </div>
            );
        }
        return (
            <div className="wrapper">
                <Header />
                <div className="news container">
                    {this.props.requestData.articles.map((news, index) => {

                        let limited = this.configLimitCharacter(news, index);
                        let col_number = this.setColumnNumber(index);

                        return <div className={`columns${col_number}`}>
                                    <CardNews 
                                        key={news._id}
                                        author={news.author} 
                                        title={limited.title}
                                        description={limited.description} 
                                        date={news.publishedAt}
                                        url={news.url}
                                        urlImage={news.urlToImage}
                                        index={index}
                                    />
                                </div>
                    })}
                </div>

                <div className="pagination">
                    <Pagination page="1"/>
                    <Pagination page={this.props.activePage <= 2 ? 2 : (this.props.activePage === totalPages) ? totalPages - 3 : this.props.activePage - 1}/>
                    <Pagination page={this.props.activePage <= 2 ? 3 : (this.props.activePage === totalPages - 1 || this.props.activePage === totalPages) ? totalPages - 2 : this.props.activePage}/>
                    <Pagination page={this.props.activePage <= 2 ? 4 : (this.props.activePage === totalPages - 1 || this.props.activePage === totalPages) ? totalPages - 1 : this.props.activePage + 1}/>
                    <Pagination page={totalPages}/>
                </div>

                <Footer />
            </div>
        );
    }
}

const mapStateToPros = state => (
    { 
        requestData: state.newsReducers.request_news,
        activePage: state.newsReducers.activePage
    }
);
const mapDispatchToProps = dispatch => bindActionCreators({requestNews}, dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(News); 