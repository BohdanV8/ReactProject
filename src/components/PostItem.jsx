import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";
const PostItem = (props) => {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {props.post_item.id}. {props.post_item.title}
        </strong>
        <div>{props.post_item.body}</div>
      </div>
      <div className="postButtons">
        <MyButton
          onClick={() => {
            navigate(["/posts/", props.post_item.id].join(""));
          }}
        >
          Open
        </MyButton>
        <MyButton
          onClick={() => {
            props.removePost(props.post_item);
          }}
        >
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
