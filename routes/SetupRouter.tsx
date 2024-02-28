import { useRoutes } from "react-router-dom";

import Home from "../src/views/Home";
import SignIn from "../src/views/SignIn";
import LogIn from "../src/views/LogIn";
import Templates from "../src/views/Templates";

const SetupRouter = () => {
  const createRoutes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/sign", element: <SignIn /> },
    { path: "/login", element: <LogIn /> },
    { path: "/templates", element: <Templates /> },
  ]);
  return createRoutes;
};

export default SetupRouter;
