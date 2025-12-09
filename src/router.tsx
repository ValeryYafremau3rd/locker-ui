import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Account";
import Board from "./pages/Board";
import Boards from "./pages/Boards";
import CreateBoard from "./pages/CreateBoard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Ticket from "./pages/Ticket";
import Tickets from "./pages/Tickets";

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
            path: "/boards",
            children: [
              {
                path: "/boards/create",
                element: <CreateBoard />,
              },
              {
                path: "/boards/:id",
                element: <Board />,
              },
              {
                path: "/boards",
                element: <Boards />,
              },
            ],
          },
          {
            path: "/tickets",
            children: [
              {
                path: "/tickets/create",
                element: <Ticket />,
              },
              {
                path: "/tickets/:id",
                element: <Ticket />,
              },
              {
                path: "/tickets",
                element: <Tickets />,
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
