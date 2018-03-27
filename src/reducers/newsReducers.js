import { REQUEST_NEWS, CHANGE_SEARCHED } from '../actions/newsActions';

const INITIAL_STATE = { searched: '', request_news: [] }

export default (state = INITIAL_STATE, action) => { 

    switch(action.type) {
        case REQUEST_NEWS: 
            return {...state, request_news: action.payload.data}

        case CHANGE_SEARCHED:
            return {...state, searched: action.payload}

        default:
            return state;
    }
}