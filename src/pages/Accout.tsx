import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductData } from "../redux/actions/index";
import type { RootState } from "../redux/reducers/rootReducer";

const Account = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  const { data, loading, error } = useSelector(
    (state: RootState) => state.productData
  );
  return (
    <div>
      <div>{import.meta.env.VITE_MODE}</div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <div>
        <div className="card">{JSON.stringify(data)}</div>
      </div>
    </div>
  );
};

export default Account;
