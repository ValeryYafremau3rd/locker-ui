import { NavLink } from "react-router-dom";
import { getAuthToken } from "../services/auth.service";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function () {
  const [loggedIn, setLoggedIn] = useState(getAuthToken());
  const location = useLocation();

  useEffect(() => {
    setLoggedIn(getAuthToken());
  }, [location]);

  return (
    <nav
      className="fixed bg-black w-full
    sticky top-0 z-50 
    p-4"
    >
      <ul className="ml-8 space-x-4 flex">
        {loggedIn ? (
          <>
            <li className="inline-block">
              <NavLink
                to="/boards"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Boards
              </NavLink>
            </li>
            <li className="inline-block">
              <NavLink
                to="/tickets"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Tickets
              </NavLink>
            </li>
            <li className="inline-block">
              <NavLink
                to="/me"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Account
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="inline-block">
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Login
              </NavLink>
            </li>
            <li className="inline-block">
              <NavLink
                to="/signup"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Signup
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
