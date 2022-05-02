import React, { useState } from 'react';

function App() {
 
  const now = Date()
  const [posts, setPosts] = useState([{username: "Tarsha Simmon," postBody: "I can't wait try a new recipe tonight.", timestamp: now}])
  
  return (
    <div>
     <h3> Hello World </h3>
    </div>
  );
}

export default App;
