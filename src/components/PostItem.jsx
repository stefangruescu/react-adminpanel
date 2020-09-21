import React from "react";
import "./PostItem.scss";

function PostItem(props) {
  const { title, body } = props;
  return (
    <div className='post-item'>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default PostItem;
