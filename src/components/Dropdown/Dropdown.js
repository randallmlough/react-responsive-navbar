import React from "react";
import PropTypes from "prop-types";
import DropdownMenu from "./Menu";
import useDropdown from "./useDropdown";

const Dropdown = (props) => {
  const { buttonText, children } = props;
  const [open, setOpen, dropdownContainer] = useDropdown();
  return (
    <div className="relative inline-block" ref={dropdownContainer}>
      <button
        className="bg-gray-300 duration-150 ease-in-out focus:bg-blue-800 focus:outline-none hover:bg-blue-600 hover:text-white focus:text-white p-1 px-5 py-3 rounded transition"
        onClick={() => setOpen((prev) => !prev)}
      >
        {buttonText}
      </button>
      <div className="relative">
        <DropdownMenu state={open}>{children}</DropdownMenu>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.object.isRequired,
};

Dropdown.defaultProps = {
  buttonText: "Click me",
};

export default Dropdown;
