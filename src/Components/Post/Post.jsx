import React, {useState, useEffect} from 'react';
import LikeDislikePost from '../LikeDislikePost/LikeDislikePost';


const Post = (props) => {


    return ( 
        <div className="post">
            <h4>{props.post.name}</h4>
            <p>{props.post.post}</p>
            <div className="bottom-content-holder">
                <div className='date'>
                    <p>{props.post.date}</p>
                </div>
                <LikeDislikePost />
            </div>
        </div>
     );

}
 
export default Post;