import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.status = 'pending';
    },
    loginUserSuccess(state, action) {
      state.user = action.payload;
      state.error = null;
      state.status = 'complete';
      console.log(state)
    },
    loginUserFailure(state, action) {
      state.user = null;
      state.error = action.payload;
      state.status = 'failed';
    },
    signupUser(state, action) {
      state.status = 'pending';
    },
    signupUserSuccess(state, action) {
      state.user = action.payload;
      console.log(action.payload)
      state.error = null;
      state.status = 'complete';
    },
    signupnUserFailure(state, action) {
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

console.log(authSlice.reducer)
export default authSlice.reducer;