import React from 'react';
import Logo from '../logo.svg';

const Post = (props) => {    

    return props.data.thumbnail.slice(0, 4) === 'http' ? (                              
        <div className='post'>
            <div className='post-thumb'>
                <div className="post-votes">{(props.data.ups/1000).toFixed(1)}k</div>
                <div className='thumb'><img src={props.data.thumbnail} alt='thumbnail' height='140px' width='140px' /></div>
            </div>
            <div className='post-description'>
                <div className='post-title'>{props.data.title}</div>
                <div className='post-domain'>({props.data.domain})</div>
                <p className='tagline'>submitted by {props.data.author.name} to {props.data.subreddit_name_prefixed}</p>
                <div>
                    <ul className="post-links-list">
                        <li>{props.data.num_comments} comments</li>
                        <li>share</li>                    
                    </ul>                     
                </div>
            </div>
        </div>        
    ):(
        <div className='post'>
            <div className='post-thumb'>
                <div className="post-votes">{(props.data.ups/1000).toFixed(1)}k</div>
                <div className='thumb'><img src={Logo} alt='thumbnail unavailable' height='140px' width='140px' /></div>
            </div>
            <div className='post-description'>
                {props.data.title}<br></br>
                <p className='tagline'>submitted by {props.data.author.name}</p>
            </div>
        </div>      
    )
};

export default Post;