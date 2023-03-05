import Login from "../page/Login";
import Main from "../page/Main";
import Root from "../page/Root";
import Home from "../components/Home";
import Leaderboard from "../components/Leaderboard";
import New from "../components/New";
import PollDetail from "../components/PollDetail";

const routes = [
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/main",
    element: <Main />,
    children: [
      {
        path: "/main/home",
        element: <Home />,
      },
      {
        path: "/main/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/main/new",
        element: <New />,
      },
      {
        path: "/main/poll/:id",
        element: <PollDetail />,
      },
    ],
  },
];

export default routes;
