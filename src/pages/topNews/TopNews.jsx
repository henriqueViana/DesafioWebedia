import React, { Component } from 'react';
import axios from 'axios';
import CardNews from '../../templates/cardNews/CardNews';

const URL = 'https://newsapi.org/v2';
const APIKEY = '522990a48dc7422384ce014a0b36a341';
const LIMIT = 7;

class TopNews extends Component {

    constructor(props) {
        super(props);

        this.state = { news: [] };
    }

    componentWillMount() {
        axios.get(`${URL}/top-headlines?country=us&pageSize=${LIMIT}&apikey=${APIKEY}`)
            .then(res => {
                if(res.status === 200) {
                    this.setState({...this.state, news: res.data.articles})
                }
                console.log(this.state);
            });
    }

    render() {
        return (
            <div className="news container">
                {this.state.news.map((news, index) => {
                    return <CardNews 
                            author={news.author} 
                            title={news.title}
                            description={news.description} 
                            date={news.publishedAt}
                            url={news.url}
                            urlImage={news.urlToImage}
                            />

                    // return <div news={index + 1}>{news.author ? news.author : 'Desconhecido'}</div>
                })}
            </div>
        );
    }
}

export default TopNews;