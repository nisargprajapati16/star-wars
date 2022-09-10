import { SET_PLANETS, SET_URLS } from "./startWars.types";

export const setPlanets = (payload) => ({
  type: SET_PLANETS,
  payload,
});

export const setUrls = (payload) => ({
  type: SET_URLS,
  payload,
});
