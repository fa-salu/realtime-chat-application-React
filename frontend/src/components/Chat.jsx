import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatContainer from "./ChatContainer";
import ScrollableFeed from "react-scrollable-feed";

function Chat({ user, Message, messages, setMssage, sendMessage }) {
  return (
    <ChatContainer>
      <ChatHeader user={user} />
      <div className="position-relative chat-height overflow-auto">
        <ScrollableFeed>
          <div className="d-flex flex-column p-4">
            {messages.map((message, index) => {
              return message.type === "userStatus" ? (
                <div key={index} className="text-center">
                  <span className="badge bg-info">
                    {message.userId === user.userId
                      ? "You have Joined!"
                      : `${message.username} has Joined!`}
                  </span>
                </div>
              ) : (
                <div
                  key={index}
                  className={
                    message.userId === user.userId
                      ? "chat-message-right pb-4"
                      : "chat-message-left pb-4"
                  }
                >
                  <div>
                    <img
                      src="data:image/jpeg;base64,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"
                      className="rounded-circle mr-1"
                      alt={message.username}
                      title={message.username}
                      width="40"
                      height="40"
                    />
                    <div className="text-muted small text-nowrap mt-2">
                      12:00 AM
                    </div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                    <div className="font-weight-bold mb-1">
                      {message.userId === user.userId
                        ? "You"
                        : message.username}
                    </div>
                    {message.message}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollableFeed>
      </div>
      <ChatInput
        Message={Message}
        setMssage={setMssage}
        sendMessage={sendMessage}
      />
    </ChatContainer>
  );
}

export default Chat;
