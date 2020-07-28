import React from "react";
import postImage from "./Images/life in road.png";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageURL }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="pranjal"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>

      {/* header -> avatar image  + username + address of post  */}
      <img src={imageURL} alt="post image" className="post__image" />
      {/* username + caption + comments */}
      <h4 className="post__text">
        <strong>{username} </strong>
        {caption}
      </h4>
    </div>
  );
}

export default Post;
