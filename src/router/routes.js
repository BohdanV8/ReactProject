import About from "../pages/About";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
import Contact from "../pages/Contact";
import NotFound from "../components/UI/NotFound/NotFound";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: "/posts", element: Posts },
  { path: "/posts/:id", element: PostPage },
  { path: "/contact", element: Contact },
  { path: "*", element: NotFound },
  { path: "/about", element: About },
  { path: "/", element: Home },
];
export const publicRoutes = [
  { path: "/", element: Login },
  { path: "/about", element: About },
  { path: "/*", element: Login },
];
