import { ReduxActionTypes } from "../actions/actionTypes";
import type { FetchMeAction, FetchMeErrorAction, FetchMeSuccessAction } from "../actions/actionTypes";
import { takeEvery, put, call } from "redux-saga/effects";
import client from "../../api/client";

function* fetchMe(action: FetchMeAction): Generator<any, void, any> {
    try {
        const response = yield call(client.get, `/users/me`);
        yield put<FetchMeSuccessAction>({ type: ReduxActionTypes.FETCH_ME_SUCCESS, payload: response.data });
    } catch (error) {
        if (error instanceof Error) {
            yield put<FetchMeErrorAction>({
                type: ReduxActionTypes.FETCH_ME_ERROR,
                error: error.message,
            });
        } else {
            yield put<FetchMeErrorAction>({
                type: ReduxActionTypes.FETCH_ME_ERROR,
                error: "An unknown error occurred",
            });
        }
    }
}
export function* meSaga() {
    yield takeEvery(ReduxActionTypes.FETCH_ME, fetchMe)
}