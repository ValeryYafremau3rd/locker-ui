import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "../redux/reducers/board.slice";
import { useParams } from "react-router-dom";

const Board = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { activeBoard, loading, error } = useSelector(
    (state: RootState) => state.boards
  );

  useEffect(() => {
    dispatch(getBoard({ id }));
  }, [dispatch]);

  return (
    <div>
      <div className=" text-2xl m-3">{activeBoard.title}</div>
    </div>
  );
};

export default Board;
