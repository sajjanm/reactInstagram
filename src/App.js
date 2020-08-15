import React from 'react';
import './App.css';
import Post from './Post';

function App() {
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

      <Post />
      <Post />
      <Post />
      {/* Posts */} 
      {/* Posts */}
    </div>
  );
}

export default App;
