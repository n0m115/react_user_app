import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from '../App';
import Users from '../components/Users';
import User from '../components/User';
import NotFound from '../components/NotFound';

const Router = () => (
    <BrowserRouter>  
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/users" component={Users} />
            <Route path="/user/:id" component={User} />
            {/*for 404*/}
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;