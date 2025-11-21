import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Accout";
import Board from "./pages/Board";
import CreateBoard from "./pages/CreateBoard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/me",
            element: <Account />,
          },
          {
            path: "/board",
            children: [
              {
                path: "/board/create",
                element: <CreateBoard />,
              },
              {
                path: "/board/:id",
                element: <Board />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: (
          <div>
            <h1>404 Page Not Found</h1>
          </div>
        ),
      },
    ],
  },
]);
