import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Mark } from "./workflow-mark-on-dark.svg";
import { ReactComponent as Logo } from "./workflow-logo-on-dark.svg";
import { ExpandedMenu, MobileMenu } from "./Menu";
import { Link, NavLink } from "react-router-dom";
import { classList } from "../../utils/helpers";
import UserMenu from "./UserMenu";
import Notifications from "./Notifications";

const Navbar = (props) => {
  const { navbar, expandMenuOn, mobileMenu, expandedMenu, userMenu } = props;

  const [open, setOpen] = useState(false);

  const navContainer = useRef();
  useEffect(() => {
    const dropdownListener = (e) => {
      if (!navContainer.current || navContainer.current.contains(e.target)) {
        return;
      } else {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", dropdownListener);
    return () => document.removeEventListener("mousedown", dropdownListener);
  }, [navContainer]);

  return (
    <header className="bg-gray-800">
      <nav ref={navContainer}>
        <div
          className={
            navbar.className
              ? navbar.className
              : classList(navbar.containerSize, "mx-auto px-2 sm:px-6 lg:px-8")
          }
        >
          <div className="relative flex items-center justify-between h-16">
            <MobileMenu
              menu={mobileMenu}
              open={open}
              setOpen={setOpen}
              hideOn={expandMenuOn}
            />
            <div
              className={classList(
                "flex-1 flex items-center justify-center",
                logoExpand(expandMenuOn)
              )}
            >
              <div className="flex-shrink-0">
                <Link to="/">
                  <Mark className="block lg:hidden h-8 w-auto" />
                  <Logo className="hidden lg:block h-8 w-auto" />
                </Link>
              </div>
              <div
                className={classList("hidden", mobileMenuHide(expandMenuOn))}
              >
                <div className="flex">
                  <ExpandedMenu menu={expandedMenu} />
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Notifications />
              <UserMenu menu={userMenu} />
            </div>
          </div>
          <div className={classList(open ? "block" : "hidden")}>
            <div className="px-2 pt-2 pb-3">
              {Object.values(mobileMenu).map((menuItem, idx) => (
                <NavLink
                  key={idx}
                  exact
                  to={menuItem.path}
                  className={classList(
                    "block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-white focus:bg-gray-50 transition duration-150 ease-in-out",
                    idx === 0 && "mt-1"
                  )}
                  activeClassName="text-white bg-gray-900"
                >
                  {menuItem.text}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  navbar: PropTypes.shape({
    containerSize: PropTypes.string,
    className: PropTypes.string,
  }),
  expandMenuOn: PropTypes.string,
  mobileMenu: PropTypes.arrayOf(PropTypes.object),
  expandedMenu: PropTypes.arrayOf(PropTypes.object),
  userMenu: PropTypes.arrayOf(PropTypes.object),
};

Navbar.defaultProps = {
  navbar: {
    containerSize: "max-w-full", //6x
    className: "",
  },
  expandMenuOn: "sm",
  mobileMenu: [],
  expandedMenu: [],
  userMenu: [],
};

export default Navbar;

function logoExpand(screenSize) {
  switch (screenSize) {
    case "xs":
      return "sm:items-stretch sm:justify-start";
    case "sm":
      return "sm:items-stretch sm:justify-start";
    case "md":
      return "md:items-stretch md:justify-start";
    case "lg":
      return "lg:items-stretch lg:justify-start";
    case "xl":
      return "xl:items-stretch xl:justify-start";
    default:
      return "xl:items-stretch xl:justify-start";
  }
}

function mobileMenuHide(screenSize) {
  switch (screenSize) {
    case "xs":
      return "xs:block xs:ml-6";
    case "sm":
      return "sm:block sm:ml-6";
    case "md":
      return "md:block md:ml-6";
    case "lg":
      return "lg:block lg:ml-6";
    case "xl":
      return "xl:block xl:ml-6";
    default:
      return "xl:block xl:ml-6";
  }
}
