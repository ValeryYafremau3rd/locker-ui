import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBoard } from "../redux/reducers/board.slice";

const CreateBoard = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { activeBoard, loading, error, status } = useSelector(
    (state: RootState) => state.boards
  );

  useEffect(() => {
    if (activeBoard.id && status === "complete") {
      navigate("/board/" + activeBoard.id);
    }
  }, [activeBoard, status]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(createBoard({ title }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="">
        <div className="p-md m-sm flex justify-end border-b">
          <button
            type="input"
            className="m-2 bg-gray-600"
          >
            Cancel
          </button>
          <button type="submit" className="m-2 bg-green-600">
            Create
          </button>
        </div>
        <div className="p-md m-sm">
          <label for="title" className="m-2 ">
            Board:
          </label>
          <input
            className="bg-gray-400 m-3 rounded-sm p-2"
            id="title"
            type="input"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateBoard;
