import { combineReducers } from "redux";
import meReducer from "./meReducer";
import authReducer from "./authSlice";
import boardSlice from "./board.slice";

const rootReducer = combineReducers({
    auth: authReducer,
    me: meReducer,
    boards: boardSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;