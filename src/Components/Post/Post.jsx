import React, {useState, useEffect} from 'react';
import LikeDislikePost from '../LikeDislikePost/LikeDislikePost';


const Post = (props) => {


    return ( 
        <div className="post">
            <h4>{props.post.name}</h4>
            <p>{props.post.post}</p>
            <LikeDislikePost />
        </div>
     );

}
 
export default Post;