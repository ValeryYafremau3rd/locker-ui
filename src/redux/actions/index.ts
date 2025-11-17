import { ReduxActionTypes } from "./ActionTypes";

export const fetchProductData = (data?: any) => {  
    return {
        type: ReduxActionTypes.FETCH_PRODUCTS,
        payload: data,
    }
}