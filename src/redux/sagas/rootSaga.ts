import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import { meSaga } from './meSaga';

export default function* rootSaga() {
    yield all([
        authSaga(),
        meSaga()
    ]);
}