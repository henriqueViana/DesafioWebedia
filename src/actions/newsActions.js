import axios from 'axios';

const URL = 'https://newsapi.org/v2';
const APIKEY = '522990a48dc7422384ce014a0b36a341';
const LIMIT = 7;

let country = '';

export const REQUEST_NEWS = 'REQUEST_NEWS';

export const requestNews = () => {

    country = window.location.href.split('/').slice(-1)[0] ? window.location.href.split('/').slice(-1)[0] : 'us'
   
    return dispatch => {
        axios.get(`${URL}/top-headlines?country=${country}&pageSize=${LIMIT}&apikey=${APIKEY}`)
            .then(res => {
                console.log(res);
                if(res.status === 200) {
                    return {type: REQUEST_NEWS, payload: res.data}
                }
            });
    }
}