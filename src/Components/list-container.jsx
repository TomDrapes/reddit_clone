import React, { Component } from 'react';

import Post from './post';

export default class ListContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            snoo: this.props.snoo,
            posts: [],
            loading: true,            
        }
        
    }
    

    componentWillReceiveProps(nextProps){

        if(nextProps.data){
            this.setState({
                posts: nextProps.data,
                loading: false
            })
        }
    }  

    render(){
        
        const posts = this.state.posts.map((data) => {
            
            return(
                <Post data={data} key={data.id} snoo={this.state.snoo} />                                                
            );
        });
        
        return (
            <div className="list-container">
                <div className="menu">
                        <ul className="list-inline">                            
                            <li><a className='menu-tab' href="./hot">Hot</a></li>
                            <li><a className='menu-tab' href="./top">Top</a></li>
                            <li><a className='menu-tab' href="./new">New</a></li>
                            <li><a className='menu-tab' href="./rising">Rising</a></li>
                            <li><a className='menu-tab' href="./controversial">Controversial</a></li>
                        </ul>
                </div>
                <div className='posts-box'>                                 
                    <div>
                        {posts}
                        {/* Show spinner while waiting for posts to load */}
                        {this.state.loading && <div className="spinner"><i className="fa fa-spinner fa-spin" ></i></div>}
                        
                    </div>
                </div>
            </div>
        )   
    }
}