import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  error: null,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser(state: typeof initialState) {
      state.status = 'pending';
    },
    loginUserSuccess(state: typeof initialState, action: any) {
      state.user = action.payload;
      state.error = null;
      state.status = 'complete';
    },
    loginUserFailure(state: typeof initialState, action: any) {
      state.user = null;
      state.error = action.payload;
      state.status = 'failed';
    },
    signupUser(state: typeof initialState) {
      state.status = 'pending';
    },
    signupUserSuccess(state: typeof initialState, action: any) {
      state.user = action.payload;
      state.error = null;
      state.status = 'complete';
    },
    signupnUserFailure(state: typeof initialState, action: any) {
      state.user = null;
      state.error = action.payload;
      state.status = 'failed';
    },
  },
});

export const { 
  loginUser, 
  loginUserSuccess, 
  loginUserFailure,
  signupUser, 
  signupUserSuccess, 
  signupUserFailure 
} = authSlice.actions;

export default authSlice.reducer;