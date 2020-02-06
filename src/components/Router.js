import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserPicker from './UserPicker';
import User from './User';
import NotFound from './NotFound';
import NavBar from './Navbar';
import {ThemeProvider} from 'styled-components';
import theme from '../theme';

const Router = () => {
    return (
        <>
        <ThemeProvider theme={theme}>
        <NavBar>
            Test
        </NavBar>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={UserPicker}/>
                <Route path="/user/:userName" component={User}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
        </ThemeProvider>
        </>
    )
}

export default Router