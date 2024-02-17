import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
<<<<<<< HEAD
import HomeScreen from "./homeScreen.jsx";
=======
import "./new.tsx";
>>>>>>> 7eb88c0ab3f3021a5c3af5d90ef15e1018f8da23

function App() {
  const [count, setCount] = useState(0);
  // Declare a new state variable called 'username' with an initial value of an empty string.
  // 'setUsername' is the function we will use to update this state.
  const [username, setUsername] = useState("");

  return (
    <>
      <div>
        <h1>Login</h1>
<<<<<<< HEAD
        <a href="./homeScreen.jsx" /*target="_blank1"*/>
=======
        <a href="./first.jsx" /*target="_blank1"*/>
>>>>>>> 7eb88c0ab3f3021a5c3af5d90ef15e1018f8da23
          <button>Click me!</button>
        </a>
        <h3>Put your Username</h3>
        <input type="text" />
        <h3>Put your Password</h3>
        <input type="password" />
      </div>
    </>
  );
}

export default App;
