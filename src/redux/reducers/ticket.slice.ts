import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ticket: {},
  tickets: [],
  statuses: [],
  error: null,
  status: "idle",
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    getStatuses(state: typeof initialState) {
      state.status = "pending";
    },
    getStatusesSuccess(state: typeof initialState, action: any) {
      state.statuses = action.payload;
      state.error = null;
      state.status = "idle";
    },
    getStatusesFailure(state: typeof initialState, action: any) {
      state.error = action.payload;
      state.status = "failed";
    },
    getTickets(state: typeof initialState) {
      state.status = "pending";
    },
    getTicketsSuccess(state: typeof initialState, action: any) {
      state.tickets = action.payload;
      state.error = null;
      state.status = "idle";
    },
    getTicketsFailure(state: typeof initialState, action: any) {
      state.error = action.payload;
      state.status = "failed";
    },
    createTicket(state: typeof initialState) {
      state.status = "pending";
    },
    createTicketSuccess(state: typeof initialState, action: any) {
      state.ticket = action.payload
      state.error = null;
      state.status = "complete";
    },
    createTicketFailure(state: typeof initialState, action: any) {
      state.error = action.payload;
      state.status = "failed";
    },
    updateTicket(state: typeof initialState) {
      state.status = "pending";
    },
    updateTicketSuccess(state: typeof initialState, action: any) {
      state.ticket = action.payload
      state.error = null;
      state.status = "complete";
    },
    updateTicketFailure(state: typeof initialState, action: any) {
      state.error = action.payload;
      state.status = "failed";
    },
    getTicket(state: typeof initialState) {
      state.status = "pending";
    },
    getTicketSuccess(state: typeof initialState, action: any) {
      state.ticket = action.payload
      state.error = null;
      state.status = "idle";
    },
    getTicketFailure(state: typeof initialState, action: any) {
      state.error = action.payload;
      state.status = "failed";
    },
    deleteTicket(state: typeof initialState) {
      state.status = "pending";
    },
    deleteTicketSuccess(state: any, action: any) {
      state.tickets = [ ...state.tickets.filter(ticket => ticket.id !== action.payload.id)]
      state.error = null;
      state.status = "idle";
    },
    deleteTicketFailure(state: typeof initialState, action: any) {
      state.error = action.payload;
      state.status = "failed";
    },
  },
});

export const {
  getStatuses,
  getStatusesSuccess,
  getStatusesFailure,
  getTickets,
  getTicketsSuccess,
  getTicketsFailure,
  updateTicket,
  updateTicketFailure,
  updateTicketSuccess,
  createTicket,
  createTicketFailure,
  createTicketSuccess,
  getTicket,
  getTicketFailure,
  getTicketSuccess,
  deleteTicket,
  deleteTicketFailure,
  deleteTicketSuccess,
} = ticketSlice.actions;

export default ticketSlice.reducer;
