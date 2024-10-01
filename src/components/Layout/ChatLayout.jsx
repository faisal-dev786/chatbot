import React, { useState } from "react";
import ChatMenu from "../Chat/ChatMenu";
import ChatNavbar from "../Chat/ChatNavbar";

const ChatLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleChatMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeChatMenu = () => {
    setIsOpen(false);
  };

  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="flex">
      <ChatMenu
        isOpen={isOpen}
        isCollapsed={isCollapsed}
        toggleChatMenu={toggleChatMenu}
        closeChatMenu={closeChatMenu}
        toggleCollapse={toggleCollapse}
      />
      <div
        className={`flex flex-col w-full transition-margin duration-200 ease-in-out ${
          isCollapsed ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <ChatNavbar toggleChatMenu={toggleChatMenu} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default ChatLayout;
