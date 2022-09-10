import { SET_PLANETS, SET_URLS } from "./startWars.types";

const INITIAL_STATE = {
  planets: {},
  urls: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PLANETS:
      return {
        ...state,
        planets: action.payload,
      };
    case SET_URLS:
      return {
        ...state,
        urls: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
