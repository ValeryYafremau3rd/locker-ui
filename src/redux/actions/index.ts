import { ReduxActionTypes } from "./ActionTypes";

export const fetchMe = (data?: any) => {  
    return {
        type: ReduxActionTypes.FETCH_ME,
        payload: data,
    }
}