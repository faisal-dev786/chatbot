import React, { useRef, useEffect, useState } from "react";
import ChatNav from "./ChatNav"; // Adjust the path as needed
import { CiChat1 } from "react-icons/ci";
import { FaUsersGear } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { MdEditSquare } from "react-icons/md";

const ChatMenu = ({ isOpen, isCollapsed, closeChatMenu, toggleCollapse }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ChatMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ChatMenuRef.current && !ChatMenuRef.current.contains(event.target)) {
        closeChatMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeChatMenu]);

  return (
    <div
      ref={ChatMenuRef}
      className={`fixed inset-y-0 left-0 bg-gray-800 text-white transition-transform duration-200 ease-in-out z-50 ${
        isCollapsed ? "w-16" : "w-64"
      } ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <div className="p-4 flex items-center justify-between">
        <h1
          className={`text-[1.5rem] font-bold ml-3 ${isCollapsed ? "hidden" : ""}`}
        >
          Chatbot
        </h1>
        <button
          onClick={toggleCollapse}
          className="hidden md:flex items-center justify-center w-8 h-8 bg-gray-700 text-white rounded-full"
          style={{
            position: "absolute",
            right: "-13px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 9l3 3-3 3M18 9l-3 3 3 3"
            ></path>
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-end mb-2 relative">
          <span
            className="text-[1.5rem] cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <MdEditSquare />
          </span>

          {isHovered && (
            <div
              className={`${
                isCollapsed ? "left-6" : "right-0"
              } absolute mt-8 w-28 bg-white shadow-lg rounded-md p-1 z-10`}
            >
              <p className="text-md font-semibold text-gray-700 hover:bg-gray-100 rounded-md px-2 py-1 cursor-pointer">
                New Chat
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col mt-8 h-[70vh] md:h-[80vh] justify-between">
          <ChatNav
            to="/new-chat"
            icon={<CiChat1 />}
            text="Chat1"
            isCollapsed={isCollapsed}
            onChatNavClick={isOpen ? closeChatMenu : null}
          />
          <ChatNav
            to="/settings"
            icon={<FaUsersGear />}
            text="Settings"
            isCollapsed={isCollapsed}
            onChatNavClick={isOpen ? closeChatMenu : null}
          />
        </div>
        <div>
          <ChatNav
            to="/"
            icon={<TbLogout />}
            text="Logout"
            isCollapsed={isCollapsed}
            onChatNavClick={isOpen ? closeChatMenu : null}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatMenu;
