import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import './app.css'


function App() {

  const [posts, setPosts] = useState([
    {
      name: 'earlybird888', 
      post: 'First!!',
      like: false,
      dislike: false,
    },
    {
      name: 'Administrator', 
      post: 'Welcome to Social Feed!',
      like: false,
      dislike: false,

    }, 
  ])

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }
  
  return (
    <div className='all-container'>
      <NavBar />
      <div className='content-container'>
        <CreatePost addNewPost={addNewPost}/>
        <div className="post-container">
          <DisplayPosts posts={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;
