import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import PropTypes from "prop-types";

const Actions = ({ actions, row }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Actions</DropdownToggle>
      <DropdownMenu>
        {actions.map(({ label, action, isHidden = () => false }) => (
          !isHidden(row) && <DropdownItem key={label} onClick={() => action(row)}>{label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

Actions.propTypes = {
  actions: PropTypes.array.isRequired,
  row: PropTypes.object.isRequired,
};

export default Actions;
