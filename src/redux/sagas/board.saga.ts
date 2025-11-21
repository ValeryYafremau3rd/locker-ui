import { takeLatest, put, call } from "redux-saga/effects";
import { fetchBoard, fetchBoards, putBoard } from "../../api/boards";
import {
  getBoardsFailure,
  getBoardsSuccess,
  getBoards,
  createBoard,
  createBoardSuccess,
  createBoardFailure,
  getBoard,
  getBoardSuccess,
  getBoardFailure,
} from "../reducers/board.slice";

function* fetchBoardsGenerator() {
  try {
    const boards = yield call(fetchBoards);
    yield put(getBoardsSuccess(boards));
  } catch (error: any) {
    yield put(getBoardsFailure(error.message));
  }
}

function* handleCreateBoard(action: any) {
  try {
    const { title } = action.payload;
    const response = yield call(putBoard, title);
    yield put(createBoardSuccess(response));
  } catch (error: any) {
    yield put(createBoardFailure(error.message));
  }
}

function* handleGetBoard(action: any) {
  try {
    const { id } = action.payload;
    const response = yield call(fetchBoard, id);
    yield put(getBoardSuccess(response));
  } catch (error: any) {
    yield put(getBoardFailure(error.message));
  }
}

function* boardSaga() {
  yield takeLatest(getBoards.type, fetchBoardsGenerator);
  yield takeLatest(createBoard.type, handleCreateBoard);
  yield takeLatest(getBoard.type, handleGetBoard);
}

export default boardSaga;
