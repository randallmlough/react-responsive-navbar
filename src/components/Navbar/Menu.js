import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { classList } from "../../utils/helpers";

export const ExpandedMenu = (props) => {
  const { menu = [] } = props;
  return menu.map((menuItem, idx) => (
    <NavLink
      key={idx}
      exact
      to={menuItem.path}
      className={classList(
        "px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out",
        idx !== 0 && "ml-4"
      )}
      activeClassName="text-white bg-gray-900"
    >
      {menuItem.text}
    </NavLink>
  ));
};

ExpandedMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
};

ExpandedMenu.defaultProps = {
  menu: [],
};

export const MobileMenu = (props) => {
  const { hideOn = "sm", open, setOpen } = props;

  return (
    <div
      className={classList(
        "flex items-center inset-y-0",
        hideOn === "sm" ? "sm:hidden" : `${hideOn}:hidden`
      )}
    >
      <button
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out z-30"
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg
          className="h-6 w-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            className={open ? "hidden" : "inline-flex"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            className={open ? "inline-flex" : "hidden"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

MobileMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
  hideOn: PropTypes.string,
  open: PropTypes.bool,
  setOpen: PropTypes.func.isRequired,
};

MobileMenu.defaultProps = {
  menu: [],
  hideOn: "sm",
  open: false,
};
