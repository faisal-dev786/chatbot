import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for navigation
import ChatNav from "./ChatNav";
import { CiChat1 } from "react-icons/ci";
import { FaUsersGear } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { MdEditSquare } from "react-icons/md";

const ChatMenu = ({ isOpen, isCollapsed, closeChatMenu, toggleCollapse }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [openChats, setOpenChats] = useState([
    { chatId: 1, name: "Chat 1" },
   
  ]); // Track open chats
  const [newChatIndex, setNewChatIndex] = useState(2); // Index for new chat names
  const [openChatId, setOpenChatId] = useState(null);

  const createNewChat = () => {
    // Create a new chat with a unique name
    setOpenChats([
      ...openChats,
      { chatId: newChatIndex, name: `Chat ${newChatIndex}` },
    ]);
    setNewChatIndex(newChatIndex + 1);
  };
 // Function to handle deleting a chat
 const handleDeleteChat = (chatId) => {
  // Filter out the chat with the given chatId
  setOpenChats(openChats.filter((chat) => chat.chatId !== chatId));
};
const toggleDeleteMenu = (chatId) => {
  // Toggle the delete menu for the clicked chat
  if (openChatId === chatId) {
    setOpenChatId(null); // Close the menu if it's already open
  } else {
    setOpenChatId(chatId); // Open the menu for the clicked chat
  }
};
  return (
    <div
      className={`fixed inset-y-0 left-0 bg-gray-800 text-white transition-transform duration-200 ease-in-out z-50 ${
        isCollapsed ? "w-16" : "w-64"
      } ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <div className="p-4 flex items-center justify-between">
        <h1
          className={`text-[1.5rem] font-bold ml-3 ${
            isCollapsed ? "hidden" : ""
          }`}
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
            onClick={createNewChat} // Create a new chat when clicked
          >
            <MdEditSquare />
          </span>

          {isHovered && (
            <div
              className={`absolute mt-8 w-28 bg-white shadow-lg rounded-md p-1 z-10`}
            >
              <p className="text-md font-semibold text-gray-700 hover:bg-gray-100 rounded-md px-2 py-1 cursor-pointer">
                New Chat
              </p>
            </div>
          )}
        </div>

        <div className="">
          {openChats.map((chat) => (
 <ChatNav
 key={chat.chatId}
 chatId={chat.chatId}
 text={chat.name}
 icon={<CiChat1 />}
 isCollapsed={isCollapsed}
 onChatNavClick={closeChatMenu}
 onDeleteChat={handleDeleteChat}
 isDeleteMenuVisible={openChatId === chat.chatId} // Pass the visibility state
 toggleDeleteMenu={toggleDeleteMenu}
/>
          ))}

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
