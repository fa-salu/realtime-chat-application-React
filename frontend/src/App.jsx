import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { io } from "socket.io-client";
import React, { useState } from "react";
import NewUser from "./components/NewUser";

const App = () => {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState("");

  function handlechange({ currentTarget: input }) {
    setNewUser(input.value);
  }

  function logNewUser() {
    setUser(newUser);
  }

  return (
    <main className="content">
      <div className="container mt-3">
        {user && <div>Logged in as {user}</div>}
        {!user && (
          <NewUser
            handlechange={handlechange}
            logNewUser={logNewUser}
            newUser={newUser}
          />
        )}
      </div>
    </main>
  );
};

export default App;
