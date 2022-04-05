import React, {useState} from 'react';
import Post from '../Post/Post';
import LikeDislikePost from '../LikeDislikePost/LikeDislikePost';

const DisplayPosts = (props) => {


    return ( 
        props.posts.map((post, i) => 
        <div key={i}>
            <Post post={post}/>
        </div>
        )
     )
}
 
export default DisplayPosts;