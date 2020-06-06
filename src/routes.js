import React from 'react';
import { Switch, Route} from "react-router-dom";
import Home from './components/home';
import NotFound from './components/not_found';
import Typing from './containers/typing';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/typing">
                <Typing />
            </Route>
            <Route path='*'>
                <NotFound />
            </Route>
        </Switch>
    );
};

