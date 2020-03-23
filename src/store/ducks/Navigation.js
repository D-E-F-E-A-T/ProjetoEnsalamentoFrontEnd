import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  toogleMenu: [],
  openMenu: [],
  closeMenu: [],
  setLocation: ["location"]
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  showMenu: true,
  location: ""
};

const ToogleMenu = (state = INITIAL_STATE) => ({
  ...state,
  showMenu: !state.showMenu
});

const OpenMenu = (state = INITIAL_STATE) => ({
  ...state,
  showMenu: true
});

const CloseMenu = (state = INITIAL_STATE) => ({
  ...state,
  showMenu: false
});

const SetLocation = (state = INITIAL_STATE, { location }) => ({
  ...state,
  location
});

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.TOOGLE_MENU]: ToogleMenu,
  [Types.OPEN_MENU]: OpenMenu,
  [Types.CLOSE_MENU]: CloseMenu,
  [Types.SET_LOCATION]: SetLocation
});
