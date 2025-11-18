import { takeLatest, put, call } from "redux-saga/effects";
import { authenticateUser, createUser } from "../../api/auth";
import {
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  signupUser,
} from "../reducers/authSlice";
import { jwtDecode } from "jwt-decode";
import { setAuthToken } from "../../services/auth.service";

function* handleLogin(action: any) {
  try {
    const { username, password } = action.payload;
    const { accessToken } = yield call(authenticateUser, username, password);
    yield loginSuccess(accessToken);
  } catch (error: any) {
    yield put(loginUserFailure(error.message));
  }
}

function* handleSignup(action: any) {
  try {
    const { username, password } = action.payload;
    const { accessToken } = yield call(createUser, username, password);
    yield loginSuccess(accessToken);
  } catch (error: any) {
    yield put(loginUserFailure(error.message));
  }
}

function* loginSuccess(accessToken: string) {
  setAuthToken(accessToken);
  const decodedToken = jwtDecode(accessToken);

  yield put(loginUserSuccess(decodedToken));
}

function* authSaga() {
  yield takeLatest(loginUser.type, handleLogin);
  yield takeLatest(signupUser.type, handleSignup);
}

export default authSaga;
