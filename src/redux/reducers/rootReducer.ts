import { combineReducers } from "redux";
import meReducer from "./meReducer";
import authReducer from "./authSlice";
import boardSlice from "./board.slice";
import ticketSlice from "./ticket.slice";
import userSlice from "./user.slice";

const rootReducer = combineReducers({
    auth: authReducer,
    me: meReducer,
    boards: boardSlice,
    tickets: ticketSlice,
    users: userSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;