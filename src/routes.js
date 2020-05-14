import React from 'react';
import { Switch, Route} from "react-router-dom";
import Home from './components/Home';
import NotFound from './components/NotFound';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
};

