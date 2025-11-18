import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/reducers/rootReducer";
import { useNavigate } from "react-router-dom";
import { getAuthToken } from "../services/auth.service";

export default function useAuthEffect() {
  const { status } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (getAuthToken() && status === "complete") {
      navigate("/me");
    }
  }, [navigate, status]);
}
