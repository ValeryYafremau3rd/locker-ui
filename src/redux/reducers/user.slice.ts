import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  error: null,
  status: "idle",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers(state: typeof initialState) {
      state.status = "pending";
    },
    getUsersSuccess(state: typeof initialState, action: any) {
      state.users = action.payload;
      state.error = null;
      state.status = "complete";
    },
    getUsersFailure(state: typeof initialState, action: any) {
      state.users = [];
      state.error = action.payload;
      state.status = "failed";
    },
  },
});

export const { getUsers, getUsersSuccess, getUsersFailure } = userSlice.actions;

export default userSlice.reducer;
