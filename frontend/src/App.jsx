import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import Main from "./components/Main";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000")

const App = () => {


  return (
   <div>
    <Main socket={socket} />
   </div>
  );
};

export default App;
