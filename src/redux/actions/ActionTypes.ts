export enum ReduxActionTypes {
    FETCH_PRODUCTS = "FETCH_PRODUCTS",
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR"
}

export interface FetchProductDataAction {
    type: ReduxActionTypes.FETCH_PRODUCTS;
    payload: any;
}

export interface FetchProductDataSuccessAction {
    type: ReduxActionTypes.FETCH_PRODUCTS_SUCCESS;
    payload: any;
}

export interface FetchProductDataErrorAction {
    type: ReduxActionTypes.FETCH_PRODUCTS_ERROR;
    error: string;
}

export type ActionTypes =
    FetchProductDataAction
    | FetchProductDataSuccessAction
    | FetchProductDataErrorAction;