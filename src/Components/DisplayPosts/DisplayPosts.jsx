import React from 'react';

const DisplayPosts = (props) => {
    return ( 
        props.posts.map((post) => 
        <div>
            <div>
                <h3>{post.name}</h3>
                <p>{post.post}</p>
            </div>
            <div>
                <div>
                    Like
                </div>
                <div>
                    Dislike
                </div>
            </div>
        </div>

        )

     );
}
 
export default DisplayPosts;