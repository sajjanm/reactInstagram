import React, {useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([ ]);

  // UseEffect Runs a peice of code based on a specific conditions

  useEffect(() => {
    // this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
        // everytime a new post is added, this code fire
      setPosts(snapshot.docs.map(doc => doc.data()));
    })

  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="Instagram"
        />
      </div>
      
      <h1>Hey guys! Let's build an Instagram Clone app with React :rocket: !</h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
