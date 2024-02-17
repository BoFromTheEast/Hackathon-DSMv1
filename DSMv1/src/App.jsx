import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeScreen from "./homeScreen.jsx";

// Import the necessary parts of React Router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // Assuming you want to capture the password too

  return (
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
                <br />
                <button>
                  <Link to="/home">Login</Link>
                </button>
                
              </div>
            </>
          }
        />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
