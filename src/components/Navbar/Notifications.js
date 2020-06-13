import React from "react";
import { Link } from "react-router-dom";
import { DropdownMenu, useDropdown } from "../Dropdown";

const notifications = [];

export default function Notifications() {
  const [
    showNotificationMenu,
    SetShowNotificationMenu,
    notificationContainer,
  ] = useDropdown();

  return (
    <div className="ml-3" ref={notificationContainer}>
      <div>
        <button
          className="p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
          onClick={() => SetShowNotificationMenu(!showNotificationMenu)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
      </div>
      <DropdownMenu state={showNotificationMenu}>
        {notifications.length ? (
          notifications.map((menuItem, idx) => (
            <Link
              className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              key={idx}
              to={menuItem.path}
            >
              {menuItem.text}
            </Link>
          ))
        ) : (
          <div className="px-5 py-3 text-gray-600">No notifications</div>
        )}
      </DropdownMenu>
    </div>
  );
}
