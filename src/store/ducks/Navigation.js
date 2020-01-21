import { createActions, createReducer } from "reduxsauce";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  toogleMenu: [],
  openMenu: [],
  closeMenu: []
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  showMenu: true
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

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.TOOGLE_MENU]: ToogleMenu,
  [Types.OPEN_MENU]: OpenMenu,
  [Types.CLOSE_MENU]: CloseMenu
});
