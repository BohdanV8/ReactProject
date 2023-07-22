import React, { useMemo, useState } from "react";
import PostList from "./components/postList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import "./styles/app.css";
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Honda", body: "I Love Honda" },
    { id: 2, title: "Geon", body: "I Love Geon" },
    { id: 3, title: "Harley Davidson", body: "I Love Harley Davidson" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    } else {
      return posts;
    }
  }, [filter.sort, posts]);
  const sorterAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toUpperCase().includes(filter.query.toUpperCase())
    );
  }, [filter.query, sortedPosts]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: 15 }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        posts={sorterAndSearchedPosts}
        title="List of posts"
        removePost={removePost}
      />
    </div>
  );
}

export default App;
