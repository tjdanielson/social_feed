import React from 'react';

const CreatePost = (props) => {
    return ( 
        <form>
            <div>
                <label>Name</label>
                <input type='text'/>
            </div>
            <div>
                <label>Post</label>
                <input type='text'/>
            </div>
            <button type='submit'>Submit</button>
        </form>
     );
}
 
export default CreatePost;