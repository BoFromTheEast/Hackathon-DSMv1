import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./new.tsx";

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");

  return (
    <>
      <div>
        <h1>
          <em>Welcome to VetPro</em>
        </h1>
        <h1>Login</h1>
        

        <h3>Put your Username</h3>
        <input type="text" />
        <h3>Put your Password</h3>
        <input type="password" />
        <a href="./homeScreen.jsx">
          <button>Login</button>
        </a>

      </div>
    </>
  );
}

export default App;
