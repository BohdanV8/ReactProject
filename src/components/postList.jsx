import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
function PostList({ posts, title, removePost }) {
  if (posts.length === 0) {
    return (
      <h1 style={{ textAlign: "center", marginBottom: 50 }}>Posts not found</h1>
    );
  }
  return (
    <div style={{ marginBottom: 50 }}>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem post_item={post} removePost={removePost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default PostList;
