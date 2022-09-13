import "./Planets.css";

import Grid from "../Grid";
import { useCallback, useEffect, useState } from "react";
import { getPlanets } from "../../services/startWars.services";
import { useDispatch, useSelector } from "react-redux";
import { setPlanets, setUrls } from "../../redux/starWars/startWars.actions";
import CreatePlanet from "./CreatePlanet";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Planets({ customColumns = [], formatFunc = (row) => row }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const planetsData = useSelector((state) => state.starWars.planets);
  let navigate = useNavigate();

  const fetchPlanetsData = useCallback(async () => {
    try {
      const response = await getPlanets();
      if (response.status === 200) {
        dispatch(setPlanets(response.data));
      }
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchPlanetsData();
  }, [fetchPlanetsData]);

  const data = {
    header: [
      "name",
      "rotation_period",
      "orbital_period",
      "diameter",
      "climate",
      "gravity",
      "terrain",
      "surface_water",
      "population",
      ...customColumns,
    ],
    values: planetsData.results?.length ? planetsData.results.map(formatFunc) : [],
    actions: [
      {
        label: "Create Planet",
        action: () => setIsOpen((prev) => !prev),
      },
      {
        label: "Go to Details",
        action: (row) =>
          navigate(`planets/${String(row.url).split("/").at(-2)}`),
      },
      {
        label: "Go to Films",
        action: (row) => {
          dispatch(setUrls(row.films));
          navigate("films");
        },
        isHidden: (row) => !row.films.length,
      },
      {
        label: "Go to Residents",
        action: (row) => {
          dispatch(setUrls(row.residents));
          navigate("residents");
        },
        isHidden: (row) => !row.residents.length,
      },
    ],
  };

  return (
    <div className="App">
      <Grid data={data} />
      {
        <CreatePlanet
          isOpen={isOpen}
          toggle={() => setIsOpen((prev) => !prev)}
        />
      }
    </div>
  );
}

Planets.prototype = {
  customColumns: PropTypes.array,
  formatFunc: PropTypes.func,
};

export default Planets;
