import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
function App() {
 
  const now = Date()
  const [posts, setPosts] = useState([{username: "Tarsha Simmons", postBody: "I can't wait try a new recipe tonight.", timestamp: 'now'}])
  
  return (
    <div>
            <NavBar/>
            <Post addNewEntryProperty={addNewEntry}/>      
            <DisplayPost parentEntries={entries}/>
      </div>
  );
  }
    export default App;
