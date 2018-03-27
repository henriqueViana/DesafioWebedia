import { combineReducers } from 'redux';
import mobileButtonsReducers from './mobileButtonsReducers';
import newsReducers from './newsReducers';

const reducers = combineReducers({
    mobileButtons: mobileButtonsReducers ,
    newsReducers: newsReducers,
});
  
export default reducers;