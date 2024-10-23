import React, { useState, useEffect } from "react";
import MessageInput from "./MessageInput"; // Import your MessageInput component

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);

  // Predefined questions and answers
  const predefinedQA = {
    "I have a question about my order.":
      "Sure, please provide your order number.",
    "What are your business hours?":
      "We are open from 9 AM to 5 PM, Monday to Friday.",
    "How do I track my order?":
      "You can track your order by clicking on the 'Track Order' link in your email.",
  };

  // Simulate bot response after a delay
  useEffect(() => {
    if (messages[messages.length - 1]?.sender === "user") {
      const userMessage = messages[messages.length - 1].text;

      if (predefinedQA[userMessage]) {
        // Simulate a delay for the bot's response
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", text: predefinedQA[userMessage] },
          ]);
        }, 1000);
      } else {
        // If the user asks something that's not predefined
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              sender: "bot",
              text: "I'm sorry, I don't have an answer for that.",
            },
          ]);
        }, 1000);
      }
    }
  }, [messages]);

  // Handle sending a new user message from the MessageInput component
  const handleSendMessage = (messageText) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: messageText },
    ]);
  };

  return (
    <div className="h-[85vh] justify-between flex flex-col">
      {/* Chat messages */}
      <div className="flex flex-col h-[90%] border rounded-md">
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${
                message.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {message.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Message input */}
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
