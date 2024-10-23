import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import MessageInput from "./MessageInput";

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { sender: "user", text: message }]);

    // Mocking a bot reply for demo purposes
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Thank you for your message!" },
      ]);
    }, 1000);
  };

  return (
    <div className="">
      <ChatWindow messages={messages} />
    </div>
  );
};

export default ChatScreen;
