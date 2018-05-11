import React, { Component } from 'react';

export default class Comment extends Component {   
    constructor(props){
        super(props);

        this.state = {
            data: this.props.data,
            index: this.props.index,
            has_replies: false,
            show_first_reply: false,
            show_all: false,         
        }     
         this.showMore = this.showMore.bind(this);
         this.showAll = this.showAll.bind(this);
         this.closeChildren = this.closeChildren.bind(this);
    }

    componentDidMount(){
        //Set state whether comments has replies
        if(this.state.data.replies.length > 0){
            this.setState({
                has_replies: true
            })
        }
    }
    
    //Show the first reply to comments when 'view reply' is clicked
    showMore(){
        this.setState({
            show_first_reply: true,                           
        })        
    }

    //Shows all replies for comments if they have multiple replies
    // when "Show X more replies" is clicked
    showAll(){        
        this.setState({
            show_all: true            
        })
    }

    //Close parents comments children when close button clicked
    closeChildren(){
        this.setState({
            show_first_reply: false,
            show_all: false,            
        })
    }

    render(){
        let comments;
        //If selected to show all of the comments replies insert a new Comment
        //component while keeping track of the index to set the background color
        if(this.state.show_all){
            comments = this.state.data.replies.map((data, index) => {
                if(index > 0){                    
                    return(
                        <Comment data={data} key={data.id} index={this.state.index + index + 1} />                                                
                    );
                }
            });
        }

        //Set comments background color depending whether its index is an even
        //number or not
        var commentStyle = {
            background: '#32302f'
        };
        if (this.state.index%2 !== 0) {
            commentStyle['background'] = '#252120';
        }

        return  (                              
            <div className='comment' style={commentStyle}>
                <div className='expand-comment' onClick={this.closeChildren}>&#9746;</div>
                <div className='comment-author'>{this.state.data.author.name}</div>
                <div className="clear"></div>
                <div className='comment-body'>{this.state.data.body}</div>
                
                {this.state.has_replies && <a className="more-comments" onClick={this.showMore}>&#9699; View reply</a>}
                <div className='comment-child'>
                    {/* Show first reply on show_first_reply state change */}
                    {this.state.show_first_reply && <Comment data={this.state.data.replies[0]} index={this.state.index+1} />}
                    {/* Show all replies to comment on show_all state change */}
                    {this.state.show_all && <div>{comments}</div>}
                </div>
                {/* If this comment has more than 1 reply, is already showing the first
                 reply and isn't already showing all replies then prompt user to show all
                 replies */}
                {this.state.data.replies.length > 1 && this.state.show_first_reply 
                && !this.state.show_all && <a className="more-comments" onClick={this.showAll}>&#9699; Show {this.state.data.replies.length-1} more replies</a>}

            </div>        
        )
    };
}
