import React, { Component } from 'react';

import Post from './post';

export default class ListContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            posts: []
        }
        
    }
    

    componentWillReceiveProps(nextProps){

        if(nextProps.data){
            this.setState({
                posts: nextProps.data
            })
        }
    }

    render(){
        
        const posts = this.state.posts.map((data) => {
            
            return(
                <Post data={data} key={data.id}/>                                                
            );
        });
        
        return (
            <div className='posts-box'>                 
                <h2>REVIEWS</h2>
                    <div>
                        {posts}
                    </div>
            </div>
        )        
    }
}