import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../templates/header/Header';
import TopNews from '../pages/topNews/TopNews';

export default props => (
    <BrowserRouter>
        <Switch>
            <div className="wrapper">
                <Header />
                <Route path='/' component={TopNews} />
            </div>
        </Switch>
    </BrowserRouter>
);