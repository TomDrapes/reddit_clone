import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultView from './routes/default-view';
import CommentsView from './routes/comments-view';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      snoo: {},
      pending: true
    };
  }

  componentDidMount(){

    const defaultLoggedIn = new window.snoowrap({
      userAgent: 'ReactJS client for reddit (by /u/doctorApes)',
      clientId: 'xxxxxx',
      clientSecret: 'xxxxxx',      
      refreshToken: 'xxxxxx'
      
    });
    this.setState({
      snoo: defaultLoggedIn,
      pending: false
    })
    
  }

  render(){
      
    return !this.state.pending ? (
      <BrowserRouter basename="/dark-theme-for-reddit">
        <Switch>
            <Route exact path={`/`} render={props => <DefaultView snoo={this.state.snoo} {...props} />} />
            <Route path={`/hot`} render={props => <DefaultView snoo={this.state.snoo} {...props}/>} />
            <Route path={`/top`} render={props => <DefaultView snoo={this.state.snoo} {...props}/>} />
            <Route path={`/new`} render={props => <DefaultView snoo={this.state.snoo} {...props}/>} />
            <Route path={`/controversial`} render={props => <DefaultView snoo={this.state.snoo} {...props}/>} />
            <Route path={`/rising`} render={props => <DefaultView snoo={this.state.snoo} {...props}/>} />
            <Route path={`/comments/:submission`} render={props => <CommentsView snoo={this.state.snoo} {...props} />} />
        </Switch>
    </BrowserRouter >
      
    ):(
      <div> loading</div>
    )
  }
}

export default App;
