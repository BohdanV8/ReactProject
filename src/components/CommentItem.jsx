import React from "react";

const CommentItem = ({ commentItem }) => {
  return (
    <div className="comment">
      <strong>Name: {commentItem.name}</strong>
      <strong>
        <br></br>Email: {commentItem.email}
      </strong>
      <p>{commentItem.body}</p>
    </div>
  );
};

export default CommentItem;
