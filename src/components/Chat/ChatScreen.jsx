import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // to access chatId from the URL
import ChatWindow from "./ChatWindow"; // Your existing ChatWindow component

const ChatScreen = () => {
  const { chatId } = useParams(); // Access the dynamic chatId from the URL
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { sender: "user", text: message }]);

    // Simulate a bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Thank you for your message!" },
      ]);
    }, 1000);
  };

  useEffect(() => {
    console.log(`Current chatId: ${chatId}`); // Log chatId to confirm it's correct
  }, [chatId]);

  return (
    <div>
      <h2>Chat ID: {chatId}</h2> {/* Display the chat ID */}
      <ChatWindow messages={messages} onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatScreen;
