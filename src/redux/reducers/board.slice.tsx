import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [],
  activeBoard: {},
  error: null,
  status: "idle",
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    getBoards(state: typeof initialState) {
      state.status = "pending";
    },
    getBoardsSuccess(state: typeof initialState, action: any) {
      state.boards = action.payload;
      state.error = null;
      state.status = "idle";
    },
    getBoardsFailure(state: typeof initialState, action: any) {
      state.error = action.payload;
      state.status = "failed";
    },
    createBoard(state: typeof initialState) {
      state.status = "pending";
    },
    createBoardSuccess(state: typeof initialState, action: any) {
      state.activeBoard = action.payload;
      state.error = null;
      state.status = "complete";
    },
    createBoardFailure(state: typeof initialState, action: any) {
      state.error = action.payload;
      state.status = "failed";
    },
    getBoard(state: typeof initialState) {
      state.status = "pending";
    },
    getBoardSuccess(state: typeof initialState, action: any) {
      console.log(action)
      state.activeBoard = action.payload;
      state.error = null;
      state.status = "idle";
    },
    getBoardFailure(state: typeof initialState, action: any) {
      state.error = action.payload;
      state.status = "failed";
    },
  },
});

export const {
  getBoards,
  getBoardsSuccess,
  getBoardsFailure,
  createBoard,
  createBoardFailure,
  createBoardSuccess,
  getBoard,
  getBoardFailure,
  getBoardSuccess,
} = boardSlice.actions;

export default boardSlice.reducer;
