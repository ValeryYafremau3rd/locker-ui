import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/reducers/rootReducer";
import { useNavigate } from "react-router-dom";

export default function useAuthEffect() {
  const { status } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken") && status === "complete") {
      navigate("/me");
    }
  }, [navigate, status]);
}
