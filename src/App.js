import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';

function App() {
 
  const now = Date()
  const [posts, setPosts] = useState([{username: "Tarsha Simmons", postBody: "I can't wait try a new recipe tonight.", timestamp: 'now'}])
  
  function addNewPost(post){
    let tempPosts = [post, posts]
    setPosts(tempPosts)
  }

  return (
    <div className = "App">
            <NavBar/>
            <CreatePost addNewPost={addNewPost}/>      
            <DisplayPost pagePosts={posts}/>
      </div>
  );
  }
    export default App;
