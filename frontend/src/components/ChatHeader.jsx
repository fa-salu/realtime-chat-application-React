import React from "react";

function ChatHeader({user}) {
  return (
    <div>
      <div className="align-items-start py-2 px-4 w-100 border-bottom border-info d-lg-block sticky-top bg-white">
        <div className="d-flex align-items-center py-1">
          <div className="position-relative">
            <img
              src="data:image/jpeg;base64,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"
              className="rounded-circle mx-2"
              alt={user.username}
              width="40"
              height="40"
            />
          </div>
          <div className="flex-grow-1">
            <strong>Logged in as {user.username} </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
