import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import Login from "./Login";

export default function Main({ socket }) {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("users", (users) => {
      const messagesArr = [];
      for (const { userId, username } of users) {
        const newMessage = { type: "UserStatus", userId, username };
        messagesArr.push(newMessage);
      }
      setMessages([...messages, ...messagesArr]);
      setUsers(users);
    });
    socket.on("session", ({ userId, username }) => {
      setUser({ userId, username });
    });
  }, [socket, messages]);

  function logNewUser() {
    setUser(newUser);
    socket.auth = { username: newUser };
    socket.connect();
  }

  return (
    <div>
      <main className="content">
        <div className="container mt-3">
          {user.userId && (
            <Chat user={user} message={message} messages={messages} setMessage={setMessage} />
          )}
          {!user.userId && (
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
