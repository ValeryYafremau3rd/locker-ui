import { ReduxActionTypes } from "../actions/actionTypes";
import type { FetchProductDataAction, FetchProductDataErrorAction, FetchProductDataSuccessAction } from "../actions/actionTypes";
import { takeEvery, put, call } from "redux-saga/effects";
import client from "../../api/client";

function* fetchProductData(action: FetchProductDataAction): Generator<any, void, any> {
    try {
        const id = action.payload
        const response = yield call(client.get, `/users/me`);
        yield put<FetchProductDataSuccessAction>({ type: ReduxActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
        if (error instanceof Error) {
            yield put<FetchProductDataErrorAction>({
                type: ReduxActionTypes.FETCH_PRODUCTS_ERROR,
                error: error.message,
            });
        } else {
            yield put<FetchProductDataErrorAction>({
                type: ReduxActionTypes.FETCH_PRODUCTS_ERROR,
                error: "An unknown error occurred",
            });
        }
    }
}
export function* productSaga() {
    yield takeEvery(ReduxActionTypes.FETCH_PRODUCTS, fetchProductData)
}