import React, {useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db, auth } from './firebase';
import { makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Input } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background. paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([ ]);
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser => {
      if (authUser){
        // user has logged in...
        console.log(authUser);
        setUser(authUser);
      } else {
        // user has logged out...
        setUser(null);
      }
    }))

    return () => {
      // perform some cleanup actions
      unsubscribe();
    }

  }, [user, username]);

  // UseEffect Runs a peice of code based on a specific conditions
  useEffect(() => {
    // this is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
        // everytime a new post is added, this code fire
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id, 
        post: doc.data()
      })));
    })

  }, []);

  const signUp = (event) => {
    event.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error) => alert(error.message));
  }

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__singup">
            <center>
              <img
              className="app__headerImage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
              alt="Instagram"
              />
            </center>
            <Input
              placeholder="username" type="username"
              value = {username}
              onChange = {(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email" type="text"
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password" type="password"
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}
            />
            <Button onClick={signUp}>Sign Up</Button>
          </form>
        </div>
      </Modal>

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="Instagram"
        />
      </div>
      
      {user ? (
        <Button onClick={() => auth.signOut()}>Logout</Button>
      ) : (
        <Button onClick={() => setOpen(true)}>Sign Up</Button>
      )}
      <h1>Hey guys! Let's build an Instagram Clone app with React!</h1>

      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;
