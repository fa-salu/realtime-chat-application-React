import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Main from "./components/Main";
import { io } from "socket.io-client";

const socket = io("https://realtime-chatapp-server-41pw.onrender.com");

const App = () => {
  return (
    <div>
      <Main socket={socket} />
    </div>
  );
};

export default App;
