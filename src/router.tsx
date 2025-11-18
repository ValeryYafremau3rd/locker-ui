import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Accout";
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
