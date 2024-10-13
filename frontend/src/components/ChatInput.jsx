import React from "react";

function ChatInput({ Message, setMssage, sendMessage }) {
  return (
    <div className="mt-auto align-items-end border-info py-3 px-4 border-top chat-input">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          name="message"
          value={Message}
          placeholder="Type your message..."
          onChange={({ currentTarget: input }) => setMssage(input.value)}
        onKeyPress={(e) => e.code === "Enter" ? sendMessage() : null}
        />
        <button className="btn btn-info" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatInput;
