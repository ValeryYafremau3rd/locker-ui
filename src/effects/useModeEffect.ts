import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

type Mode = "create" | "view" | "edit";

export default function useAuthEffect(): Mode {
  const { id } = useParams();
  //const navigate = useNavigate();

  return id ? "view" : "create";
}
