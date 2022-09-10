import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { getPlanetDetails } from "../../services/startWars.services";

const PlanetDetails = () => {
  const [planetData, setPlanetData] = useState({});
  const { planetId } = useParams();

  const fetchPlanetsData = useCallback(async () => {
    try {
      const response = await getPlanetDetails(planetId);
      if (response.status === 200) {
        setPlanetData(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  }, [planetId]);

  useEffect(() => {
    fetchPlanetsData();
  }, [fetchPlanetsData]);

  return (
    <Container>
      <h2>Planet Name: {planetData.name}</h2>
      <Row xs="2" className="gy-2">
        <Col className="bg-light border p-2">
          <p className="fw-bold mb-0">Climate:</p>
          {planetData.climate || "-"}
        </Col>
        <Col className="bg-light border p-2">
          <p className="fw-bold mb-0">Diameter:</p>
          {planetData.diameter || "-"}
        </Col>
        <Col className="bg-light border p-2">
          <p className="fw-bold mb-0">Gravity:</p>
          {planetData.gravity || "-"}
        </Col>
        <Col className="bg-light border p-2">
          <p className="fw-bold mb-0">Orbital Period:</p>
          {planetData.orbital_period || "-"}
        </Col>
        <Col className="bg-light border p-2">
          <p className="fw-bold mb-0">Population:</p>
          {planetData.population || "-"}
        </Col>
        <Col className="bg-light border p-2">
          <p className="fw-bold mb-0">Rotation Period:</p>
          {planetData.rotation_period || "-"}
        </Col>
        <Col className="bg-light border p-2">
          <p className="fw-bold mb-0">Rotation Period:</p>
          {planetData.rotation_period || "-"}
        </Col>
        <Col className="bg-light border p-2">
          <p className="fw-bold mb-0">Surface Water:</p>
          {planetData.surface_water || "-"}
        </Col>
        <Col className="bg-light border p-2">
          <p className="fw-bold mb-0">Terrain:</p>
          {planetData.terrain || "-"}
        </Col>
        <Col className="bg-light border p-2">
          <p className="fw-bold mb-0">Film Count:</p>
          {planetData.films?.length || 0}
        </Col>
        <Col className="bg-light border p-2">
          <p className="fw-bold mb-0">Residents Count:</p>
          {planetData.residents?.length || 0}
        </Col>
      </Row>
    </Container>
  );
};

export default PlanetDetails;
