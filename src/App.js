import React, { Component } from 'react';
import Snoowrap from 'snoowrap';
import logo from './logo.svg';
import './App.css';

import Header from './Components/header';
import ListContainer from './Components/list-container';

/* Reddit oAuth */

const userLoggedIn = new Snoowrap({
  clientId: '',
  clientSecret: '',
  username: '',
  password: ''
});

const anonUser = new Snoowrap({
  userAgent: 'ReactJS client for reddit (by /u/doctorApes)',
  clientId: '',
  clientSecret: '',
  /* PLACE ANONYMOUS AUTHENTICATION TOKEN HERE */
  accessToken: ''
});

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: []
    };

    this.getData();
  }

  getData(){
    userLoggedIn.getHot().then(response => {
      this.setState({
        data: response
      })
    });
    
  }

  render() {
    console.log(this.state.data);
    //anonUser.getHot().map(post => post.title).then(console.log);
    return (
      <div className="App">
        <Header />
        <ListContainer data={this.state.data}/>
      </div>
    );
  }
}

export default App;
