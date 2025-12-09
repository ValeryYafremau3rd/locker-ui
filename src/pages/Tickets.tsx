import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMe } from "../redux/actions/index";
import type { RootState } from "../redux/reducers/rootReducer";
import { getBoards } from "../redux/reducers/board.slice";
import { deleteTicket, getTickets } from "../redux/reducers/ticket.slice";
import { useParams, useNavigate } from "react-router-dom";

const Tickets = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMe());
    dispatch(getTickets());
  }, [dispatch]);

  const { tickets } = useSelector((state: RootState) => state.tickets);
  const { data } = useSelector((state: RootState) => state.me);

  return (
    <div className="p-4">
      <ul className="mx-4">
        <button
          className="bg-green-600 my-4"
          onClick={() => {
            navigate("/tickets/create");
          }}
        >
          New Ticket
        </button>
        <div className="text-xl my-4 text-amber-300">Assigned to me</div>
        {tickets
          .filter((ticket) => ticket.assignedToId === data.id)
          .map((ticket, i) => (
            <li
              key={ticket.id}
              className="m-1 py-2 px-5 text-black-500 border-1 bg-white-400 border-white-950"
            >
              <a onClick={() => navigate("/tickets/" + ticket.id)}>
                {ticket.title}
              </a>
              <a
                className="text-red-600 text-xs float-right"
                onClick={() => dispatch(deleteTicket(ticket.id))}
              >
                {" "}
                Delete (X)
              </a>
            </li>
          ))}
        <div className="text-xl my-4 text-amber-300">Created by me</div>
        {tickets
          .filter((ticket) => ticket.authorId === data.id)
          .map((ticket, i) => (
            <li
              key={ticket.id}
              className="m-1 py-2 px-5 text-black-500 border-1 bg-white-400 border-white-950"
            >
              <a onClick={() => navigate("/tickets/" + ticket.id)}>
                {ticket.title}
              </a>
              <a
                className="text-red-600 text-xs float-right"
                onClick={() => dispatch(deleteTicket(ticket.id))}
              >
                {" "}
                Delete (X)
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Tickets;
