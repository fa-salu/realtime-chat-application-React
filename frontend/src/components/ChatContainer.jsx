import React from "react";

function ChatContainer(props) {
  return (
    <div className="card border-2 border-info w-100 vh-95 d-flex flex-column  ">
      {props.children}
    </div>
  );
}

export default ChatContainer;

