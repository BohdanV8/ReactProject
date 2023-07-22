import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {props.number}. {props.post_item.title}
        </strong>
        <div>{props.post_item.body}</div>
      </div>
      <div className="post_btns"></div>
      <MyButton
        onClick={() => {
          props.removePost(props.post_item);
        }}
      >
        Delete
      </MyButton>
    </div>
  );
};

export default PostItem;
