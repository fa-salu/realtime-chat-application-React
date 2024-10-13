import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatContainer from "./ChatContainer";

function Chat({ user, Message, messages, setMessage }) {
  return (
    <ChatContainer>
      <ChatHeader user={user} />
      <div className="position-relative chat-height overflow-auto">
        <div className="d-flex flex-column p-4">
          {messages.map((message, index) => {
            return message.type === "UserStatus" ? (
              <div key={index} className="text-center">
                <span className="badge bg-info">
                  {message.userId === user.userId
                    ? "You have Joined!"
                    : `${message.username} has Joined!`}
                </span>
              </div>
            ) : null;
          })}
        </div>
      </div>
      <ChatInput Message={Message} setMessage={setMessage} />
    </ChatContainer>
  );
}

export default Chat;
