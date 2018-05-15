import React, { Component } from 'react';

export default class Comment extends Component {   
    constructor(props){
        super(props);

        this.state = {
            data: this.props.data,
            index: this.props.index,
            snoo: this.props.snoo,
            has_replies: false,
            show_first_reply: false,
            show_all: false,  
            displayTextBox: false,
            up_arrow_color: '#e5dfc5',
            down_arrow_color: '#e5dfc5'     
        }     
        this.upVote = this.upVote.bind(this);
        this.downVote = this.downVote.bind(this);
        this.showMore = this.showMore.bind(this);
        this.showAll = this.showAll.bind(this);
        this.closeChildren = this.closeChildren.bind(this);
        this.displayTextBox = this.displayTextBox.bind(this);
        this.reply = this.reply.bind(this);
        
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

    upVote(){
        this.state.snoo.getComment(this.state.data.id).fetch().then(comment => {            
            return comment.upvote();
        });  
        this.setState({
            up_arrow_color: 'blue',
            down_arrow_color: "#e5dfc5"
        })   
    }

    downVote(){
        this.state.snoo.getComment(this.state.data.id).fetch().then(comment => {            
            return comment.downvote();
        });
        this.setState({
            up_arrow_color: '#e5dfc5',
            down_arrow_color: "red"
        })   
    }

    displayTextBox(){
        this.setState({
            displayTextBox: !this.state.displayTextBox
        })
    }

    reply(){
        this.state.snoo.getComment(this.state.data.id).reply(document.getElementById("textArea2").value);        
        alert("Thankyou. Your comment has been posted.");
        document.getElementById("textArea2").value = "";   
    }

    render(){
        let comments;
        //If selected to show all of the comments replies insert a new Comment
        //component while keeping track of the index to set the background color
        if(this.state.show_all){
            comments = this.state.data.replies.map((data, index) => {
                if(index > 0){                    
                    return(
                        <Comment data={data} key={data.id} index={this.state.index + index + 1} snoo={this.state.snoo} />                                                
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
                <div className="comments-vote-box">
                    <i className="fa fa-caret-up" onClick={this.upVote} style={{color: this.state.up_arrow_color}}></i><br/>
                    <i className="fa fa-caret-down" onClick={this.downVote} style={{color: this.state.down_arrow_color}}></i>
                </div>
                <div className="comments-content-box">
                    <div className='expand-comment' onClick={this.closeChildren}>&#9746;</div>                
                    <div className='comment-author'>{this.state.data.author.name}</div>
                    <div className="clear"></div>
                    <div className='comment-body'>{this.state.data.body}</div>
                    
                    {this.state.has_replies && <a className="more-comments" onClick={this.showMore}>&#9699; View reply</a>}
                    <a className="reply" onClick={this.displayTextBox}>Leave a comment &#9662;</a>
                    {this.state.displayTextBox && <div className="text-field2"><br/><textarea id="textArea2" rows="4" cols="50" placeholder="Leave a comment" />
                    <br/><button onClick={this.reply}>Submit</button></div>}
                    <div className='comment-child'>
                        {/* Show first reply on show_first_reply state change */}
                        {this.state.show_first_reply && <Comment data={this.state.data.replies[0]} index={this.state.index+1} snoo={this.state.snoo} />}
                        {/* Show all replies to comment on show_all state change */}
                        {this.state.show_all && <div>{comments}</div>}
                    </div>
                    {/* If this comment has more than 1 reply, is already showing the first
                    reply and isn't already showing all replies then prompt user to show all
                    replies */}
                    {this.state.data.replies.length > 1 && this.state.show_first_reply 
                    && !this.state.show_all && <a className="more-comments" onClick={this.showAll}>&#9699; Show {this.state.data.replies.length-1} more replies</a>}
                </div>
            </div>        
        )
    };
}
