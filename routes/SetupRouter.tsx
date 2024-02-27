import { useRoutes } from "react-router-dom";

import SignIn from "../src/views/SignIn";
import Home from "../src/views/Home";

const SetupRouter = () => {
  let createRoutes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/sign", element: <SignIn /> },
  ]);
  return createRoutes;
};

export default SetupRouter;
