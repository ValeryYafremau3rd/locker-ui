import { ReduxActionTypes } from "../actions/ActionTypes";
import type { ActionTypes } from "../actions/ActionTypes";

export interface ApiDataFetchInitialState {
  data: any;
  loading: boolean;
  error: any;
}

const InitialValues: ApiDataFetchInitialState = {
  data: {},
  loading: false,
  error: null,
};

const meReducer = (
  state: ApiDataFetchInitialState = InitialValues,
  action: ActionTypes
): ApiDataFetchInitialState => {
  switch (action.type) {
    case ReduxActionTypes.FETCH_ME:
      return { ...state, loading: true };
    case ReduxActionTypes.FETCH_ME_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ReduxActionTypes.FETCH_ME_ERROR:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default meReducer;
