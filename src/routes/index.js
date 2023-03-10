import Login from "../page/Login";
import Main from "../page/Main";
import PrivateRoute from "../page/PrivateRoute";
import Home from "../components/Home";
import Leaderboard from "../components/Leaderboard";
import New from "../components/New";
import PollDetail from "../components/PollDetail";
import NotFound from "../page/NotFound";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/add",
        element: <New />,
      },
      {
        path: "/questions/:question_id",
        element: <PollDetail />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];

export default routes;
