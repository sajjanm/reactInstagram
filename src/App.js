import React, {useState} from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username:"sajjanm01",
      caption:"Happy! I feel happy!",
      imageUrl:"https://create-react-app.dev/img/logo.svg" 
    },
    {
      username:"Abhishek",
      caption:"Dang! It is working",
      imageUrl:"https://create-react-app.dev/img/logo.svg" 
    }
  ]);

  return (
    <div className="app">
      <div class="app__header">
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
