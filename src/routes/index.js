import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Snoowrap from 'snoowrap';
import DefaultView from './default-view';
import CommentsView from './comments-view';

//INSERT SNOO STUFF HERE


export default () =>
    
    (<BrowserRouter >
        <Switch>
            <Route exact path="/" render={props => <DefaultView snoo={userLoggedIn} {...props} />} />
            <Route path="/hot" render={props => <DefaultView snoo={userLoggedIn} {...props}/>} />
            <Route path="/top" render={props => <DefaultView snoo={userLoggedIn} {...props}/>} />
            <Route path="/new" render={props => <DefaultView snoo={userLoggedIn} {...props}/>} />
            <Route path="/controversial" render={props => <DefaultView snoo={userLoggedIn} {...props}/>} />
            <Route path="/rising" render={props => <DefaultView snoo={userLoggedIn} {...props}/>} />
            <Route path="/comments/:submission" render={props => <CommentsView snoo={userLoggedIn} {...props} />} />
        </Switch>
    </BrowserRouter >);
