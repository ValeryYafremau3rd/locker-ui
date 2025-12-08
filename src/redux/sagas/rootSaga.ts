import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import boardSaga from './board.saga';
import { meSaga } from './meSaga';
import ticketSaga from './tickets.saga';
import userSaga from './users.saga';

export default function* rootSaga() {
    yield all([
        authSaga(),
        meSaga(),
        boardSaga(),
        ticketSaga(),
        userSaga()
    ]);
}