import React, { useEffect, useState } from "react";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/postList";
import Pagination from "../components/UI/Pagination/Pagination";
import usePosts from "../hooks/usePosts";
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import getPageCount from "../utils/pages";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sorterAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  useEffect(() => {
    fetchPosts();
  }, [page]);
  return (
    <div className="Posts">
      <MyButton
        style={{ marginTop: 30 }}
        onClick={() => {
          setModal(true);
        }}
      >
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} countOfPosts={posts.length} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && (
        <h1
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          {postError}
        </h1>
      )}
      {isPostsLoading ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      ) : (
        <div>
          <PostList
            posts={sorterAndSearchedPosts}
            title="List of posts"
            removePost={removePost}
          />
          <Pagination
            totalPages={totalPages}
            page={page}
            changePage={setPage}
          />
        </div>
      )}
    </div>
  );
}

export default Posts;
