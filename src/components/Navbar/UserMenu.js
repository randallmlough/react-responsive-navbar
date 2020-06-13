import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { DropdownMenu, useDropdown } from "../Dropdown";

const UserMenu = (props) => {
  const { menu } = props;
  const [showUserMenu, setShowUserMenu, userMenuContainer] = useDropdown();

  const handleRemoveSession = (e) => {
    e.preventDefault();
    console.log("LOGGING OUT");
  };
  return (
    <div className="ml-3" ref={userMenuContainer}>
      <div>
        <button
          className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </button>
      </div>
      <DropdownMenu state={showUserMenu}>
        {menu.map((menuItem, idx) => (
          <Link
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
            key={idx}
            to={menuItem.path}
          >
            {menuItem.text}
          </Link>
        ))}
        <Link
          className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          to="/"
          onClick={handleRemoveSession}
        >
          Sign Out
        </Link>
      </DropdownMenu>
    </div>
  );
};

UserMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.object),
};

UserMenu.defaultProps = {
  menu: [],
};

export default UserMenu;
