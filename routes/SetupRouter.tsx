import { useRoutes } from "react-router-dom";

import SignIn from "../src/views/SignIn";
import LogIn from "../src/views/LogIn";
import Home from "../src/views/Home";

const SetupRouter = () => {
  let createRoutes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/sign", element: <SignIn /> },
    { path: "/login", element: <LogIn /> },
  ]);
  return createRoutes;
};

export default SetupRouter;
