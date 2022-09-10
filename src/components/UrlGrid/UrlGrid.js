import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Prototype from "prop-types";
import { getData } from "../../services/startWars.services";
import Grid from "../../components/Grid";

const UrlGrid = ({ type, header }) => {
  const [data, setData] = useState([]);
  const urls = useSelector((state) => state.starWars.urls);

  const gridData = {
    header,
    values: data,
  };

  const fetch = useCallback(async (url) => {
    try {
      const response = await getData(url);
      if (response.status === 200) {
        setData((prev) => [...prev, { ...response.data }]);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (urls.length) {
      urls.forEach((url) => fetch(url));
    }
  }, [urls]);

  return (
    <div className="App">
      <h1>{type}</h1>
      {urls.length ? (
        <Grid data={gridData} />
      ) : (
        <>
          <h5>No Data Found</h5>
          <h6>Please go to home page</h6>
        </>
      )}
    </div>
  );
};

UrlGrid.prototype = {
  type: Prototype.string.isRequired,
};

export default UrlGrid;
