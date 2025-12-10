import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../redux/actions/index";
import type { RootState } from "../redux/reducers/rootReducer";
import { useNavigate } from "react-router-dom";
import { removeAuthToken } from "../services/auth.service";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);

  const { data, loading, error } = useSelector((state: RootState) => state.me);

  return (
    <div>
      <div className=" text-2xl m-3 mx-4">{data.name}</div>
      <button
        className="m-4 bg-red-700"
        onClick={() => {
          removeAuthToken();
          navigate("/login");
        }}
      >
        Logout
      </button>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Account;
