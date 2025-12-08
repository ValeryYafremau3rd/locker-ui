import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBoards } from "../redux/reducers/board.slice";
import type { RootState } from "../redux/reducers/rootReducer";
import {
  createTicket,
  getStatuses,
  getTicket,
  updateTicket,
} from "../redux/reducers/ticket.slice";
import useModeEffect from "../effects/useModeEffect";
import { getUsers } from "../redux/reducers/user.slice";

const Ticket = () => {
  const navigate = useNavigate();
  const mode = useModeEffect();
  const { id } = useParams();

  const { boards } = useSelector((state: RootState) => state.boards);
  const { ticket, statuses } = useSelector((state: RootState) => state.tickets);
  const { users } = useSelector((state: RootState) => state.users);
  const { user } = useSelector((state: RootState) => state.auth);
  const [form, setForm] = useState<any>({
    title: "",
    description: "",
    boardId: undefined,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStatuses());
  }, [dispatch]);

  useEffect(() => {
    mode === "view" && dispatch(getTicket(id));
  }, [mode, id]);

  useEffect(() => {
    if (ticket.id === +id) {
      setForm(ticket);
    }
  }, [ticket, id]);

  useEffect(() => {
    dispatch(getBoards());
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (ticket.id !== +id) {
      boards.length && setForm((prev) => ({ ...prev, boardId: boards[0].id }));
    }
  }, [boards, ticket, id]);

  useEffect(() => {
    if (mode === "create") {
      console.log(user.id);
      user.id && setForm((prev) => ({ ...prev, assignedToId: user.id }));
    }
  }, [user, mode]);

  useEffect(() => {
    if (mode === "create") {
      statuses.length &&
        setForm((prev) => ({ ...prev, statusId: statuses[0].id }));
    }
  }, [statuses, mode]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
    dispatch(mode === "create" ? createTicket(form) : updateTicket(form));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <div className="p-md m-sm flex justify-end border-b">
          <a type="input" className="m-2" onClick={navigate.bind(this, -1)}>
            &lt; Back
          </a>
          <button type="submit" className="m-2 bg-green-600">
            {mode === "create" ? "Create" : "Save"}
          </button>
        </div>
        <div className="p-md m-sm">
          <label className="m-2 ">Title:</label>
          <input
            required
            className="bg-gray-400 m-3 rounded-sm p-2"
            id="title"
            name="title"
            type="input"
            placeholder="title"
            value={form.title}
            onChange={handleChange}
          />
        </div>
        <div className="p-md m-sm">
          <label className="m-2 ">Board:</label>
          <select
            className="border-white border-1 rounded-md my-4 p-2"
            onChange={handleChange}
            name="boardId"
            value={form.boardId}
          >
            {boards.map((board) => (
              <option key={board.id} value={board.id} className="text-black">
                {board.title}
              </option>
            ))}
          </select>
        </div>
        <div className="p-md m-sm">
          <label className="m-2 ">Assign to:</label>
          <select
            className="border-white border-1 rounded-md my-4 p-2"
            onChange={handleChange}
            name="assignedToId"
            value={form.assignedToId}
          >
            {users.map((user) => (
              <option key={user.id} value={user.id} className="text-black">
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className="p-md m-sm">
          <label className="m-2 ">Status:</label>
          <select
            className="border-white border-1 rounded-md my-4 p-2"
            onChange={handleChange}
            name="statusId"
            value={form.statusId}
          >
            {statuses.map((status) => (
              <option key={status.id} value={status.id} className="text-black">
                {status.status}
              </option>
            ))}
          </select>
        </div>

        <div className="p-md m-sm">
          <textarea
            className="bg-gray-400 m-3 rounded-sm p-2 w-2xl h-50"
            id="description"
            name="description"
            placeholder="Description..."
            value={form.description}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Ticket;
