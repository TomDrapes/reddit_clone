import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';


export default class Post extends Component { 
    constructor(props){
        super(props);

        this.state = {
            data: this.props.data,
            thumbnail_available: false,
            preview_available: false,
            preview_image: false,
            preview_video: false,
            preview_link: false
        }     
        this.viewPreview = this.viewPreview.bind(this);   
    }

    componentDidMount(){
        
        if(this.state.data.hasOwnProperty('preview')){
            if(this.state.data.preview.enabled){
                this.setState({
                    preview_available: true
                })                    
            }
        }

        if(this.state.data.hasOwnProperty('media_embed')){
            if(this.state.data.media_embed.hasOwnProperty('content')){
                this.setState({
                    preview_available: true
                })
            }
        }

        if(this.state.data.hasOwnProperty('thumbnail')){
            if(this.state.data.thumbnail.slice(0,4) === 'http'){
                this.setState({
                    thumbnail_available: true
                })                    
            }
        }
        
    }

    viewPreview(){
        if(this.state.data.post_hint.includes("image")){
            this.setState({
                preview_image: !this.state.preview_image
            })
        }else if(this.state.data.post_hint.includes("video")){
            this.setState({
                preview_video: !this.state.preview_video
            })
        }else if(this.state.data.post_hint.includes("link")){
            this.setState({
                preview_link: !this.state.preview_link
            })
        }      
    }
    
    shareTwitter(){
        window.open('https://twitter.com/share?url=news.com.au', 'twitter-popup', 'height=350,width=600');
    }
    
    shareFacebook(){
        window.open('https://www.facebook.com/sharer/sharer.php?u=news.com.au', 'facebook-popup', 'height=350,width=600');
        //window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 'facebook-popup', 'height=350,width=600');
    }

    
    render() {
        
        return (
            <div className='post'>
                <div className='post-thumb'>
                    <div className="post-votes">{(this.state.data.ups/1000).toFixed(1)}k</div>
                    {this.state.thumbnail_available ? 
                    <div className='thumb'><img src={this.state.data.thumbnail} alt='thumbnail' height='140px' width='140px' /></div>
                    :
                    <div className='thumb'><img src={Logo} alt='thumbnail unavailable' height='140px' width='140px' /></div>}
                    
                </div>
                <div className='post-description'>
                    <div className='post-title'>{this.state.data.title}</div>
                    <div className='post-domain'>({this.state.data.domain})</div>        

                    <p className='tagline'>submitted by <strong>{this.state.data.author.name}</strong> to <strong>{this.state.data.subreddit_name_prefixed}</strong></p>
                    <div className='tagline2'>                     
                        <ul className="post-links-list">                        
                            <li><Link className='comments-link' to={`/comments/${this.state.data.id}`}>{this.state.data.num_comments} comments</Link></li>                          
                            <li><i className="fa fa-twitter" aria-hidden="true" onClick={this.shareTwitter}></i></li>
                            <li><i className="fa fa-facebook" aria-hidden="true" onClick={this.shareFacebook}></i></li>                  
                        </ul>                     
                    </div>                                        
                    {this.state.preview_available && <i class="fa fa-caret-square-o-right" aria-hidden="true" onClick={this.viewPreview}></i>}
                    <div className="clear"></div>
                    {this.state.preview_image && <img className="preview" src={this.state.data.url} alt={this.state.data.title} />}
                    {this.state.preview_video && <div className="preview" dangerouslySetInnerHTML={{__html: this.state.data.media_embed.content}}></div>}
                    {this.state.preview_link && <iframe className="preview" src={this.state.data.preview.reddit_video_preview.fallback_url} title={this.state.data.title}></iframe>}
                    
                    
                </div>
            </div>        
        )
    };
}
