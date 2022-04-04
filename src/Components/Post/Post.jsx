import React, {useState, useEffect} from 'react';
import LikeDislikePost from '../LikeDislikePost/LikeDislikePost';

const Post = (props) => {


    return ( 
        <div>
            <div>
                <h3>{props.post.name}</h3>
                <p>{props.post.post}</p>
            </div>
            <div>
                <LikeDislikePost />
            </div>
        </div>
     );

}
 
export default Post;