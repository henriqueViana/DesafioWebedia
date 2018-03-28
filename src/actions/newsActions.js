import axios from 'axios';
import { 
    URL, 
    APIKEY, 
    LIMIT, 
    REQUEST_NEWS, 
    CHANGE_SEARCHED, 
    CHANGE_PAGINATION, 
    RESET_PAGINATION 
} from '../helpers/constants';

export const requestNews = (searched, country, page) => {

    let url = urlMount(searched, country, page);
    let result = axios.get(url);

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

export const changePagination = page => ({
    type: CHANGE_PAGINATION,
    activePage: page
})

export const resetPagination = () => ({
    type: RESET_PAGINATION,
});

const urlMount = (searched, country, page) => {
    const search = searched ? `&q=${searched}` : '';
    const pageActive = page ? `&page=${page}` : '';
    
    let countryPath = (country === 'destaques') ? 'everything?q=news' : `top-headlines?country=${country}`;
    
    if(country === 'destaques' && (searched !== '' && searched !== undefined)) countryPath = `everything?${searched}`; 

    return `${URL}/${countryPath}&pageSize=${LIMIT}${search}${pageActive}&apikey=${APIKEY}`;
}

