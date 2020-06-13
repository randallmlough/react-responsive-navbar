import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"

import DropdownMenu from "./Menu"

const Dropdown = (props) => {
  const { buttonText, children } = props
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownContainer = useRef()

  useEffect(() => {
    const dropdownListener = (e) => {
      if (
        !dropdownContainer.current ||
        dropdownContainer.current.contains(e.target)
      ) {
        return
      } else {
        setShowDropdown(false)
      }
    }
    document.addEventListener("mousedown", dropdownListener)
    return () => document.removeEventListener("mousedown", dropdownListener)
  }, [dropdownContainer])
  return (
    <>
      <button
        className="p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {buttonText}
      </button>
      <div className="relative">
        <DropdownMenu state={showDropdown}>{children}</DropdownMenu>
      </div>
    </>
  )
}

Dropdown.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.object.isRequired,
}

Dropdown.defaultProps = {
  buttonText: "Click me",
}

export default Dropdown
