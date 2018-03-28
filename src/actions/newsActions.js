import axios from 'axios';

export const URL = 'https://newsapi.org/v2';
export const APIKEY = '522990a48dc7422384ce014a0b36a341';
export const LIMIT = 7;

export const REQUEST_NEWS = 'REQUEST_NEWS';
export const CHANGE_SEARCHED = 'CHANGE_SEARCHED';

export const requestNews = (searched, country) => {

    const search = searched ? `&q=${searched}` : '';
    let countryPath = (country == 'destaques') ? 'everything?q=news' : `top-headlines?country=${country}`;
    
    if(country === 'destaques' && searched !== '') countryPath = `everything?${searched}`; 
    
    let result = axios.get(`${URL}/${countryPath}&pageSize=${LIMIT}${search}&apikey=${APIKEY}`)

    console.log(`${URL}/${countryPath}&pageSize=${LIMIT}${search}&apikey=${APIKEY}`);
    
    return {
        type: REQUEST_NEWS,
        payload: result
    }
}

export const routerChanged = () => {
    return dispatch => {
        dispatch(requestNews());
    }
}

export const changeSearched = event => ({
    type: CHANGE_SEARCHED ,
    payload: event.target.value
});

