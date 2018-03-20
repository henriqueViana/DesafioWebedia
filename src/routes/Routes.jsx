import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import News from '../pages/news/News';

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={News} />
            <Route exact path='/noticias/:id' component={News} />
        </Switch>
    </BrowserRouter>
);