import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  loadRequest: [],
  loadSuccess: ["buildings"],
  loadFailure: ["errors"]
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  buildings: [{}],
  errors: []
};

const LoadSuccess = (state = INITIAL_STATE, buildings) => ({
  ...state,
  buildings,
  errors: INITIAL_STATE.errors
});

const LoadFailure = (state = INITIAL_STATE, errors) => ({
  ...state,
  errors
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: LoadSuccess,
  [Types.LOAD_FAILURE]: LoadFailure
});
