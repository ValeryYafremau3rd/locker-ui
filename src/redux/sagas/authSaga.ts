import { takeLatest, put, call } from "redux-saga/effects";
import { authenticateUser, createUser } from "../../api/auth";
import { loginUser, loginUserFailure, loginUserSuccess, signupUser } from "../reducers/authSlice";
import { jwtDecode } from 'jwt-decode';

function* handleLogin(action) {
  try {
    const { username, password } = action.payload;
    const { accessToken } = yield call(authenticateUser, username, password);

    localStorage.setItem("authToken", accessToken);
    const decodedToken = jwtDecode(accessToken);

    yield put(loginUserSuccess(decodedToken));
  } catch (error: any) {
    yield put(loginUserFailure(error.message));
  }
}

function* handleSignup(action) {
  try {
    const { username, password } = action.payload;
    const { accessToken } = yield call(createUser, username, password);

    localStorage.setItem("authToken", accessToken);
    const decodedToken = jwtDecode(accessToken);

    yield put(loginUserSuccess(decodedToken));
  } catch (error: any) {
    yield put(loginUserFailure(error.message));
  }
}

function* authSaga() {
  yield takeLatest(loginUser.type, handleLogin);
  yield takeLatest(signupUser.type, handleSignup);
}

export default authSaga;
