import React from 'react';

const Post = (props) => {
    return ( 
        <div>
            <div>
                <h3>{props.post.name}</h3>
                <p>{props.post.post}</p>
            </div>
            <div>
                <div>
                    <button>Like</button>
                </div>
                <div>
                    <button>Dislike</button>
                </div>
            </div>
        </div>

     );
}
 
export default Post;