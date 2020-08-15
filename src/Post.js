import React from 'react';
import './Post.css';
import Avator from "@material-ui/core/Avatar";

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avator
                    className="post__avatar"
                    alt='Sajjan'
                    src="/static/images/avatar/1.jpg"
                />
                <h3>Username</h3>
            </div>

            <img className="post__image" src="https://create-react-app.dev/img/logo.svg" />
            
            <h4 className="post__text"><strong>sajjanm01 </strong>My first clone app</h4>
        </div>
    )
}



export default Post
