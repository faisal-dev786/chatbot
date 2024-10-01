import React, { useState } from "react";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
    { sender: "user", text: "I have a question about my order." },
  ]);

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block p-3 rounded-lg ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatWindow;
