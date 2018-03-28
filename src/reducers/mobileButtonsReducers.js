import { OPEN_MENU, CLOSE_MENU, OPEN_SEARCH, CLOSE_SEARCH } from '../helpers/constants';

const INITIAL_STATE = { open_menu: '', open_search: '' }

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case OPEN_MENU:
            return {...state, open_menu: 'open'}

        case CLOSE_MENU:
            return {...state, open_menu: ''}

        case OPEN_SEARCH:
            return {...state, open_search: 'open'}

        case CLOSE_SEARCH:
            return {...state, open_search: ''}

        default:
            return state;
    }
}