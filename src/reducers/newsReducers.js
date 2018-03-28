import { REQUEST_NEWS, CHANGE_SEARCHED, CHANGE_PAGINATION, RESET_PAGINATION } from '../helpers/constants';

const INITIAL_STATE = { searched: '', request_news: [], activePage: 1 }

export default (state = INITIAL_STATE, action) => { 

    switch(action.type) {
        case REQUEST_NEWS: 
            return {...state, request_news: action.payload.data}

        case CHANGE_SEARCHED:
            return {...state, searched: action.payload}

        case CHANGE_PAGINATION:
            return {...state, activePage: action.activePage}
            
        case RESET_PAGINATION:
            return {...state, activePage: 1}

        default:
            return state;
    }
}