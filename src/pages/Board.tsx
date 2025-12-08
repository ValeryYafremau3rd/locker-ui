import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "../redux/reducers/board.slice";
import { useParams, useNavigate } from "react-router-dom";
import type { RootState } from "../redux/reducers/rootReducer";
import {
  deleteTicket,
  getTicket,
  getTickets,
} from "../redux/reducers/ticket.slice";

const Board = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activeBoard } = useSelector((state: RootState) => state.boards);
  const { tickets } = useSelector((state: RootState) => state.tickets);

  useEffect(() => {
    dispatch(getBoard({ id }));
    dispatch(getTickets());
  }, [dispatch]);

  return (
    <div>
      <div className=" text-md m-3">
        {activeBoard.title}
        <button
          className="bg-green-500 float-right"
          onClick={() => {
            navigate("/tickets/create");
          }}
        >
          New Ticket
        </button>
      </div>
      <div className="w-100% my-10 mx-3 flex flex-row">
        <div className="flex-1 p-3 border-amber-50 border-1 text-center">
          <div>To Do</div>
          <div>
            <ul className="mx-4">
              {tickets
                .filter(
                  (ticket) =>
                    ticket.boardId === activeBoard.id && ticket.statusId === 2
                )
                .map((ticket, i) => (
                  <li
                    key={ticket.id}
                    className="m-1 py-2 px-5 text-black-500 border-1 bg-white-400 border-white-950"
                  >
                    <a onClick={() => navigate("/tickets/" + ticket.id)}>
                      {ticket.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 p-3 border-amber-50 border-1 text-center">
          <div>In Progress</div>
          <div>
            <ul className="mx-4">
              {tickets
                .filter(
                  (ticket) =>
                    ticket.boardId === activeBoard.id && ticket.statusId === 3
                )
                .map((ticket, i) => (
                  <li
                    key={ticket.id}
                    className="m-1 py-2 px-5 text-black-500 border-1 bg-white-400 border-white-950"
                  >
                    <a onClick={() => navigate("/tickets/" + ticket.id)}>
                      {ticket.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 p-3 border-amber-50 border-1 text-center">
          <div>Done</div>
          <div>
            <ul className="mx-4">
              {tickets
                .filter(
                  (ticket) =>
                    ticket.boardId === activeBoard.id && ticket.statusId === 4
                )
                .map((ticket, i) => (
                  <li
                    key={ticket.id}
                    className="m-1 py-2 px-5 text-black-500 border-1 bg-white-400 border-white-950"
                  >
                    <a onClick={() => navigate("/tickets/" + ticket.id)}>
                      {ticket.title}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <ul className="mx-4">
          <div>Backlog</div>
          {tickets
            .filter(
              (ticket) =>
                ticket.boardId === activeBoard.id && [1, 5].includes(ticket.statusId)
            )
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
    </div>
  );
};

export default Board;
