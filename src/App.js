import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';


function App() {

  const [posts, setPosts] = useState([
    {
      name: 'earlybird888', 
      post: 'First!!'
    },
    {
      name: 'Administrator', 
      post: 'Welcome to Social Feed!'
    }, 
  ])
  
  return (
    <div >
      <NavBar />
      <CreatePost/>
      <DisplayPosts posts={posts} />
    </div>
  );
}

export default App;
