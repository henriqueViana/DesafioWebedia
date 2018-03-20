import { REQUEST_NEWS } from '../actions/newsActions';

const INITIAL_STATE = { request_news: [] }

export default (state = INITIAL_STATE, action) => { 
    switch(action.type) {
        case REQUEST_NEWS: 
            return {...state, request_news: action.payload}

        default:
            return state;
    }
}