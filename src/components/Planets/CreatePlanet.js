import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

const GetInputFieldWithType = ({
  name,
  label,
  onChange,
  type = "text",
  value,
  isSubmitted = false,
}) => (
  <FormGroup>
    <Label for={name}>{label}</Label>
    <Input
      id={name}
      name={name}
      placeholder={label}
      type={type}
      value={value}
      onChange={onChange}
      invalid={isSubmitted && !value}
    />
    {isSubmitted && !value && (
      <FormFeedback>{label} is required !</FormFeedback>
    )}
  </FormGroup>
);

const CreatePlanet = ({ isOpen, toggle }) => {
  const formRef = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "",
    rotation_period: "",
    orbital_period: "",
    diameter: "",
    climate: "",
    gravity: "",
    terrain: "",
    surface_water: "",
  });

  const onChange = (event) =>
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (!Object.values(data).filter((val) => !val).length) {
      console.log(data);
    }
  };

  const onToggle = () => {
    setIsSubmitted();
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={onToggle}>
      <ModalHeader toggle={toggle}>Create Planet</ModalHeader>
      <ModalBody>
        <Form onSubmit={onSubmit} ref={formRef}>
          <GetInputFieldWithType
            name="name"
            label="Name"
            value={data.name}
            onChange={onChange}
            isSubmitted={isSubmitted}
          />
          <GetInputFieldWithType
            name="rotation_period"
            label="Rotation Period"
            type="number"
            value={data.rotation_period}
            onChange={onChange}
            isSubmitted={isSubmitted}
          />
          <GetInputFieldWithType
            name="orbital_period"
            label="Orbital Period"
            type="number"
            value={data.orbital_period}
            onChange={onChange}
            isSubmitted={isSubmitted}
          />
          <GetInputFieldWithType
            name="diameter"
            label="Diameter"
            type="number"
            value={data.diameter}
            onChange={onChange}
            isSubmitted={isSubmitted}
          />
          <GetInputFieldWithType
            name="climate"
            label="Climate"
            value={data.climate}
            onChange={onChange}
            isSubmitted={isSubmitted}
          />
          <GetInputFieldWithType
            name="gravity"
            label="Gravity"
            value={data.gravity}
            onChange={onChange}
            isSubmitted={isSubmitted}
          />
          <FormGroup>
            <Label for="terrain">Terrain</Label>
            <Input
              id="terrain"
              name="terrain"
              type="select"
              onChange={onChange}
              invalid={isSubmitted && !data.terrain}
              value={data.terrain}
            >
              <option value="na">Select Terrain</option>
              <option value="t1">Terrain 1</option>
              <option value="t2">Terrain 2</option>
              <option value="t3">Terrain 3</option>
              <option value="t4">Terrain 4</option>
            </Input>
            {isSubmitted && !data.terrain && (
              <FormFeedback>Terrain is required !</FormFeedback>
            )}
          </FormGroup>
          <GetInputFieldWithType
            name="surface_water"
            label="Surface Water"
            type="number"
            value={data.surface_water}
            onChange={onChange}
            isSubmitted={isSubmitted}
          />
          <Button type="submit" color="primary">
            Save Planet
          </Button>{" "}
          <Button color="secondary" onClick={onToggle}>
            Cancel
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

CreatePlanet.prototype = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default CreatePlanet;
