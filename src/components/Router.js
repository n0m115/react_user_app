import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from '../App';
import Navigation from '../components/Navigation';
import NotFound from '../components/NotFound';

const Router = () => (
    <BrowserRouter>  
        <Switch>
            <Route path="/" component={App} exact />
            {/*for 404*/}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;