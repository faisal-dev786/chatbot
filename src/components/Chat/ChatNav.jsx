import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const ChatNav = ({
  chatId,
  text,
  icon,
  isCollapsed,
  onChatNavClick,
  onDeleteChat,
  isDeleteMenuVisible,
  toggleDeleteMenu,
}) => {
  const [isHovered, setIsHovered] = useState(false); // State to manage hover effect
  const deleteMenuRef = useRef(null); // Reference for the delete menu to detect clicks outside

  // Function to handle the delete action
  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Prevent triggering the chat navigation when deleting
    onDeleteChat(chatId); // Call the delete function passed as prop
    toggleDeleteMenu(null); // Hide the delete menu after clicking delete
  };

  // Close delete menu if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (deleteMenuRef.current && !deleteMenuRef.current.contains(event.target)) {
        toggleDeleteMenu(null); // Hide the delete menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleDeleteMenu]);

  return (
    <div
      className="mb-4 relative"
      onClick={onChatNavClick}
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false
    >
      <Link
        to={`/chat/${chatId}`} // Dynamically link to the chatId
        className={`flex items-center px-4 py-2 rounded-md hover:bg-gray-700 ${
          isCollapsed ? "text-center" : ""
        }`}
      >
        <span className="mr-2">{icon}</span>
        {!isCollapsed && <span>{text}</span>} {/* Display text if not collapsed */}
      </Link>

      {/* Show the three dots (ellipsis) on hover */}
      {isHovered && (
        <div
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xl cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering chat navigation when toggling delete menu
            toggleDeleteMenu(chatId); // Toggle delete menu visibility for the clicked chat
          }}
        >
          <span>•••</span>
        </div>
      )}

      {/* Show delete option when clicked on the three dots */}
      {isDeleteMenuVisible && (
        <div
          ref={deleteMenuRef}
          className="absolute top-full z-20 right-0 mt-2 bg-white text-black shadow-lg rounded-md"
        >
          <button
            className="px-4 py-2 text-red-500 hover:bg-gray-100 rounded-md"
            onClick={handleDeleteClick}
          >
            Delete Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatNav;
