import React from 'react';
import Post from '../Post/Post';

const DisplayPosts = (props) => {
    return ( 
        props.posts.map((post) => 
            <Post post={post}/>
        )
     );
}
 
export default DisplayPosts;