import React, { useState } from "react";
import Chat from "./Chat";
import Login from "./Login";

export default function Main() {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  function logNewUser() {
    setUser(newUser);
  }

  return (
    <div>
      <main className="content">
        <div className="container mt-3">
          {user && (
            <Chat user={user} message={message} setMessage={setMessage} />
          )}
          {!user && (
            <Login
              // handlechange={handlechange}
              logNewUser={logNewUser}
              setNewUser={setNewUser}
              newUser={newUser}
            />
          )}
        </div>
      </main>
    </div>
  );
}
