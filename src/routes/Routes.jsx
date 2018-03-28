import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import News from '../pages/news/News';

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' render={() => <Redirect to="/noticias/destaques"/>} />
            <Route exact path='/noticias/:id' component={News} />
        </Switch>
    </BrowserRouter>
);