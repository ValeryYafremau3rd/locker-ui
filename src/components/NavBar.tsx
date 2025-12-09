import { NavLink } from "react-router-dom";
import { getAuthToken, removeAuthToken } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  return (
    <nav
      className="fixed bg-black w-full
    sticky top-0 z-50 
    p-4"
    >
      <ul className="ml-8 space-x-4 flex">
        <li className="inline-block">
          <NavLink
            to="/me"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Account
          </NavLink>
        </li>
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
        <li className="inline-block">
          <a
            onClick={() => {
              removeAuthToken();
              navigate("/login");
            }}
          >
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}
