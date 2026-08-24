import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "../redux/reducers/board.slice";
import { useParams, useNavigate } from "react-router-dom";
import type { RootState } from "../redux/reducers/rootReducer";

import {
  deleteTicket,
  getTicket,
  getTickets,
} from "../redux/reducers/ticket.slice";
import startMove from "../services/drag&drop.service";

const Board = () => {
  const ticketElRef = useRef(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { activeBoard } = useSelector((state: RootState) => state.boards);
  const { tickets } = useSelector((state: RootState) => state.tickets);

  function mouseUp(e) {
    e.preventDefault();
    console.log("onmouseup");
  }

  useEffect(() => {
    dispatch(getBoard({ id }));
    dispatch(getTickets());
  }, [dispatch]);

  return (
    <div>
      <div className=" text-md m-3">
        <div className="text-2xl text-white my-4 text-amber-300">
          {activeBoard.title}
        </div>
        <button
          className="bg-green-500 p-4"
          onClick={() => {
            navigate("/tickets/create");
          }}
        >
          Add Ticket
        </button>
      </div>
      <div className="w-100% my-10 mx-3 flex flex-row">
        <div
          className="flex-1 p-3 border-amber-50 border-1 text-center"
          onDragOver={(e) => {
            e.preventDefault();
            console.log("dragover");
          }}
          onDrop={(e) => {
            e.preventDefault();
            console.log("dragdrop");
          }}
        >
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
          <div className="text-xl my-4 text-amber-300">Backlog</div>
          {tickets
            .filter(
              (ticket) =>
                ticket.boardId === activeBoard.id &&
                [1, 5].includes(ticket.statusId)
            )
            .map((ticket, i) => (
              <li
                key={ticket.id}
                className="m-1 py-2 px-5 text-black-500 border-1 cursor-pointer border-white-950 relative"
                draggable
                /*onMouseDown={startMove}*/
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
