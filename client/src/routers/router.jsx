import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import GamePage from "../views/GamePage";
import HomePage from "../views/Homepage";
import MyGamePage from "../views/MyGamePage";
import LeaderboardPage from "../views/LeaderboardPage";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <BaseLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/game", element: <GamePage /> },
      { path: "/my-game", element: <MyGamePage /> },
      { path: "/leaderboards", element: <LeaderboardPage /> },
    ],
  },
]);
