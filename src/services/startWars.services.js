import axios from "axios";

export const getPlanets = () => axios.get("https://swapi.dev/api/planets/");

export const getPlanetDetails = (id) => axios.get(`https://swapi.dev/api/planets/${id}`);

export const getData = (url) => axios.get(url);