import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import useFetching from "../hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import CommentItem from "../components/CommentItem";
const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPostById(params.id);
    setPost(response.data);
  });
  const [fetchComments, isCommentsLoading, errorOfComments] = useFetching(
    async () => {
      const response = await PostService.getCommentsByPostId(params.id);
      setComments(response.data);
    }
  );
  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);
  return (
    <div className="PostPage">
      {isLoading && <Loader />}
      {!error && !isLoading && (
        <div style={{ fontSize: 30, textAlign: "center" }}>
          {post.id}. {post.title}
          <h1 style={{ textAlign: "center" }}>Comments</h1>
          {comments.map((el) => (
            <CommentItem commentItem={el} key={el.id} />
          ))}
        </div>
      )}
      {error && <h1>{error}</h1>}
    </div>
  );
};
export default PostPage;
