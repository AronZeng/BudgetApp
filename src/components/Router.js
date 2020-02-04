import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserPicker from './UserPicker';
import User from './User';
import NotFound from './NotFound';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={UserPicker}/>
                <Route path="/user/:userName" component={User}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router