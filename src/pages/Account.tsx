import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../redux/actions/index";
import type { RootState } from "../redux/reducers/rootReducer";

const Account = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);

  const { data, loading, error } = useSelector((state: RootState) => state.me);

  return (
    <div>
      <div className=" text-2xl m-3 p-4 mx-4">{data.name}</div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Account;
