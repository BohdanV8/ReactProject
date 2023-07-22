import React from "react";
import PostItem from "./PostItem";
function PostList({ posts, title, removePost }) {
  if (posts.length === 0) {
    return <h1 style={{ textAlign: "center" }}>Posts not found</h1>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          number={index + 1}
          post_item={post}
          removePost={removePost}
          key={post.id}
        />
      ))}
    </div>
  );
}

export default PostList;
