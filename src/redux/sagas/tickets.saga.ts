import { takeLatest, put, call } from "redux-saga/effects";
import { putTicket, fetchTicket, fetchTickets, postTicket, dropTicket, fetchStatuses } from "../../api/tickets";
import {
  getTicketsFailure,
  getTicketsSuccess,
  getTickets,
  createTicket,
  createTicketSuccess,
  createTicketFailure,
  getTicket,
  getTicketSuccess,
  getTicketFailure,
  updateTicket,
  updateTicketFailure,
  updateTicketSuccess,
  deleteTicket,
  deleteTicketFailure,
  deleteTicketSuccess,
  getStatuses,
  getStatusesFailure,
  getStatusesSuccess,
} from "../reducers/ticket.slice";

function* handleGetStatuses() {
  try {
    const tickets = yield call(fetchStatuses);
    yield put(getStatusesSuccess(tickets));
  } catch (error: any) {
    yield put(getStatusesFailure(error.message));
  }
}

function* handleFetchTickets() {
  try {
    const tickets = yield call(fetchTickets);
    yield put(getTicketsSuccess(tickets));
  } catch (error: any) {
    yield put(getTicketsFailure(error.message));
  }
}

function* handleUpdateTicket(action: any) {
  try {
    const response = yield call(postTicket, action.payload);
    yield put(updateTicketSuccess(response));
  } catch (error: any) {
    yield put(updateTicketFailure(error.message));
  }
}

function* handleCreateTicket(action: any) {
  try {
    const response = yield call(putTicket, action.payload);
    yield put(createTicketSuccess(response));
  } catch (error: any) {
    yield put(createTicketFailure(error.message));
  }
}

function* handleGetTicket(action: any) {
  try {
    const response = yield call(fetchTicket, action.payload);
    yield put(getTicketSuccess(response));
  } catch (error: any) {
    yield put(getTicketFailure(error.message));
  }
}

function* handleDeleteTicket(action: any) {
  try {
    const response = yield call(dropTicket, action.payload);
    yield put(deleteTicketSuccess(response));
  } catch (error: any) {
    yield put(deleteTicketFailure(error.message));
  }
}

function* ticketSaga() {
  yield takeLatest(getTickets.type, handleFetchTickets);
  yield takeLatest(createTicket.type, handleCreateTicket);
  yield takeLatest(updateTicket.type, handleUpdateTicket);
  yield takeLatest(getTicket.type, handleGetTicket);
  yield takeLatest(deleteTicket.type, handleDeleteTicket);
  yield takeLatest(getStatuses.type, handleGetStatuses);
}

export default ticketSaga
