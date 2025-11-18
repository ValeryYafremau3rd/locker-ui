import { combineReducers } from "redux";
import meReducer from "./meReducer";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    me: meReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;