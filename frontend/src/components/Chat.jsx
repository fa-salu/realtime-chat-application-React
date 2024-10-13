import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatContainer from "./ChatContainer";

function Chat({ user, Message, setMessage }) {
  return (
    <ChatContainer>
      <ChatHeader user={user} />
      <ChatInput Message={Message} setMessage={setMessage} />
    </ChatContainer>
  );
}

export default Chat;
