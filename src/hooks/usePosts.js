import { useMemo } from "react";
const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    } else {
      return posts;
    }
  }, [sort, posts]);
  return sortedPosts;
};

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const sorterAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toUpperCase().includes(query.toUpperCase())
    );
  }, [query, sortedPosts]);
  return sorterAndSearchedPosts;
};
