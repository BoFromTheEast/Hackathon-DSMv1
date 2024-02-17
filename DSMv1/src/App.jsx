import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chat from "./Chat";

// Import the necessary parts of React Router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // Assuming you want to capture the password too

  return (
<<<<<<< HEAD
    <>
      <div>
        <h1>Login</h1>
        <a href="./App.jsx" /*target="_blank1"*/>
          <button>Click me!</button>
        </a>

        <h3>Put your Username</h3>
        <input type="text" />
        <h3>Put your Password</h3>
        <input type="password" />
      </div>
    </>
=======
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <h1>
                  <em>Welcome to VetPro</em>
                </h1>
                <h1>Login</h1>
                {/* Replace <a> with <Link> for navigation */}
                <Link to="/home">Click me!</Link>
                <br />
                <br />
                <h3>Put your Username</h3>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <h3>Put your Password</h3>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                {/* Use Link for navigation or a form submission for login */}
                <Link to="/home">Login</Link>
              </div>
            </>
          }
        />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Router>
>>>>>>> 8665749baf3ca3c963d4ee2d7f103c3067898658
  );
}

export default App;
