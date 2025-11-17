import { combineReducers } from "redux";
import productData from "./productReducer";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    productData,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;