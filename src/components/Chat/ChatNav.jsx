import React from "react";
import { Link, useLocation } from "react-router-dom";

const ChatNav = ({ to, icon, text, isCollapsed, onChatNavClick }) => {
  const location = useLocation().pathname;

  const handleClick = () => {
    if (onChatNavClick) {
      onChatNavClick();
    }
  };

  return (
    <div className={`mb-4 ${location === to ? "bg-[#3b4d68] text-white" : ""}`}>
      <Link
        to={to}
        className={`flex items-center p-2 w-full rounded-lg hover:bg-[#3b4d68] hover:text-white ${
          location === to ? "text-white]" : "text-white"
        } ${isCollapsed ? "justify-center" : ""}`}
        onClick={handleClick}
      >
        <span className={`text-xl ${isCollapsed ? "mr-0" : "mr-3"}`}>
          {icon}
        </span>
        {!isCollapsed && <span>{text}</span>}
      </Link>
    </div>
  );
};

export default ChatNav;
