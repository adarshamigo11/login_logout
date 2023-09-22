import React, { useState } from "react";
import credentials from "./credentials";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const handleLogin = () => {
    const user = credentials.find(
      (cred) => cred.email === email && cred.password === password
    );

    if (user) {
      setLoggedIn(true);
      setLoginMessage("Login successful!");
    } else {
      setShowRegistration(true);
      setLoginMessage("You need to register to log in.");
    }
  };

  const handleRegistration = () => {
    if (email && password) {
      credentials.push({ email, password });
      setLoggedIn(true);
      setLoginMessage("Registration successful. You are now logged in.");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setShowRegistration(false);
    setEmail("");
    setPassword("");
    setLoginMessage("");
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <h2>Login Successful</h2>
          <p>{loginMessage}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>{showRegistration ? "Registration" : "Login"} Page</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showRegistration ? (
            <button onClick={handleRegistration}>Register</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
          <p>{loginMessage}</p>
        </div>
      )}
    </div>
  );
}

export default App;
