import React from "react";

const ChatNavbar = ({ toggleChatMenu }) => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <button onClick={toggleChatMenu} className="md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <h1 className="text-lg font-bold">Chat me</h1>
      <div className="hidden md:block">{/* Add other navbar items here */}</div>
    </div>
  );
};

export default ChatNavbar;
