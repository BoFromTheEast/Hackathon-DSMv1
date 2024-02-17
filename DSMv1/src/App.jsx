import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomeScreen from "./homeScreen.jsx";
import ChatPage from "./Chat.tsx";

// Import the necessary parts of React Router
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // Assuming you want to capture the password too
  const navigate = useNavigate(); // Use the navigate hook to navigate to the next page

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      navigate("/home");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h1><em>Welcome to VetPro</em></h1> {/* Welcome message */}
      <h1>Login</h1> {/* Login header */}
      {/* Login form */}
      <form onSubmit={handleLogin}>
        <h3>Put your Username</h3> {/* Username field label */}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state on change
        />
        <br />
        <h3>Put your Password</h3> {/* Password field label */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on change
        />
        <br />
        <button type="submit">Login</button> {/* Login button */}
      </form>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
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
                <button>
                  <Link to="/chatPage">Head to Chat Room</Link>
                </button>
                
              </div>
            </>
          }
        />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/chatPage" element={<ChatPage />} />
=======
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomeScreen />} /> {/* Route for HomeScreen component */}
>>>>>>> c587fad98ec9dd3a292276b7c170c2084af18076
      </Routes>
    </Router>
  );
}

export default App;