import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // Declare a new state variable called 'username' with an initial value of an empty string.
  // 'setUsername' is the function we will use to update this state.
  const [username, setUsername] = useState("");

  return (
    <>
      <div>
        <h1>Login</h1>
        <a href="./first.html" /*target="_blank1"*/>
          <button>Click me!</button>
        </a>

        <input type="text" />
      </div>
    </>
  );
}

export default App;
