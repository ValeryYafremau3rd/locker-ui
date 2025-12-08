import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../redux/actions/index";
import type { RootState } from "../redux/reducers/rootReducer";
import { getBoards } from "../redux/reducers/board.slice";
import { deleteTicket, getTickets } from "../redux/reducers/ticket.slice";
import { useParams, useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMe());
    dispatch(getBoards());
    dispatch(getTickets());
  }, [dispatch]);

  const { data, loading, error } = useSelector((state: RootState) => state.me);
  const { boards } = useSelector((state: RootState) => state.boards);
  const { tickets } = useSelector((state: RootState) => state.tickets);

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
      <ul className="mx-4">
        <div>My tickets</div>
        {tickets.map((ticket, i) => (
          <li key={ticket.id} className="m-1 py-2 px-5 text-black-500 border-1 bg-white-400 border-white-950">
            <a onClick={() => navigate("/tickets/" + ticket.id)}>
              {ticket.title}
            </a>
            <a className="text-red-600 text-xs float-right" onClick={() => dispatch(deleteTicket(ticket.id))}> Delete (X)</a>
          </li>
        ))}
      </ul>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Account;
