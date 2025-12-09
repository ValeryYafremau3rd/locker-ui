import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../redux/actions/index";
import type { RootState } from "../redux/reducers/rootReducer";
import { getBoards } from "../redux/reducers/board.slice";
import { useNavigate } from "react-router-dom";

const Boards = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  const { boards } = useSelector((state: RootState) => state.boards);
  return (
    <div className="p-4">
      <ul className="mx-4">
        <button
          className="bg-green-600 my-4"
          onClick={() => {
            navigate("/boards/create");
          }}
        >
          New Board
        </button>
        <div className="text-xl my-4 text-amber-300">My boards</div>
        {boards.map((board) => (
          <li
            key={board.id}
            className="m-2 p-2 text-blue-500 border-1 text-white"
          >
            <a onClick={() => navigate("/boards/" + board.id)}>{board.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Boards;
