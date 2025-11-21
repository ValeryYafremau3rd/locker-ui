import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../redux/actions/index";
import type { RootState } from "../redux/reducers/rootReducer";
import { useNavigate } from "react-router-dom";
import { getBoards } from "../redux/reducers/board.slice";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMe());
    dispatch(getBoards());
  }, [dispatch]);
  const { data, loading, error } = useSelector((state: RootState) => state.me);
  const { boards } = useSelector((state: RootState) => state.boards);
  return (
    <div>
      <div className=" text-2xl m-3">{data.name}</div>
      <ul className="mx-4">
        <div>
          My boards
          <button
            className="bg-green-500 float-right"
            onClick={() => {
              navigate("/board/create");
            }}
          >
            New Board
          </button>
        </div>
        {boards.map((board) => (
          <li key={board.id} className="m-2 p-2 text-blue-500">
            <a onClick={() => navigate("/board/" + board.id)}>{board.title}</a>
          </li>
        ))}
      </ul>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Account;
