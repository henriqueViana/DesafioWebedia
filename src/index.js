import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import Routes from './routes/Routes';
import reducers from './reducers/reducers';

import './default.css';

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers);

ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>
    , document.getElementById('root')
);
