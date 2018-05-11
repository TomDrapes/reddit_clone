import React, { Component } from 'react';

import '../App.css';
import Header from '../components/header';
import ListContainer from '../components/list-container';

class DefaultView extends Component {
    constructor(props){
      super(props);
  
      this.state = {
          snoo: this.props.snoo,
          data: []
      };
      console.log(props);
      this.getData(props.location.pathname);
    }
  
    getData(page){
        switch (page) {
            case '/': this.state.snoo.getHot().then(response => {
                this.setState({
                  data: response
                })
              });
              break;
            case '/top': this.state.snoo.getTop().then(response => {
                this.setState({
                  data: response
                })
              });
              break;
            case '/new': this.state.snoo.getNew().then(response => {
                this.setState({
                  data: response
                })
              });
              break;
            case '/rising': this.state.snoo.getRising().then(response => {
                this.setState({
                  data: response
                })
              });
              break;
            case 'controversial': this.state.snoo.getControversial().then(response => {
                this.setState({
                  data: response
                })
              });
              break;
            default: this.state.snoo.getHot().then(response => {
                this.setState({
                  data: response
                })
              });
        }
    }
  
    render() {
      console.log(this.state.data);
      return (
        <div className="App">
          <Header />
          <ListContainer data={this.state.data}/>
        </div>
      );
    }
  }
  
  export default DefaultView;
  
