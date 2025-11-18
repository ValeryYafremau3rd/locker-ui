export enum ReduxActionTypes {
  FETCH_ME = "FETCH_ME",
  FETCH_ME_SUCCESS = "FETCH_ME_SUCCESS",
  FETCH_ME_ERROR = "FETCH_ME_ERROR",
}

export interface FetchMeAction {
  type: ReduxActionTypes.FETCH_ME;
  payload: any;
}

export interface FetchMeSuccessAction {
  type: ReduxActionTypes.FETCH_ME_SUCCESS;
  payload: any;
}

export interface FetchMeErrorAction {
  type: ReduxActionTypes.FETCH_ME_ERROR;
  error: string;
}

export type ActionTypes =
  | FetchMeAction
  | FetchMeSuccessAction
  | FetchMeErrorAction;
