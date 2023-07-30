import React from "react";
import NotFound from "./UI/NotFound/NotFound";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "../pages/Contact";
import PostPage from "../pages/PostPage";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/posts/:id" element={<PostPage />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
