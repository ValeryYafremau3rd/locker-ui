import { takeLatest, put, call } from "redux-saga/effects";
import { fetchUsers } from "../../api/user.api";
import {
} from "../reducers/board.slice";
import { getUsersSuccess, getUsersFailure, getUsers } from "../reducers/user.slice";

function* handleGetUsers() {
  try {
    const users = yield call(fetchUsers);
    yield put(getUsersSuccess(users));
  } catch (error: any) {
    yield put(getUsersFailure(error.message));
  }
}

function* userSaga() {
  yield takeLatest(getUsers.type, handleGetUsers);
}

export default userSaga;
