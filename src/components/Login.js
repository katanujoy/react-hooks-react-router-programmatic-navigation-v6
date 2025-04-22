import { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Login() {
  // 1. Get the login function from App component via context
  const login = useOutletContext();
  
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // 2. Add form validation state
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleLogin(e) {
    e.preventDefault();
    setError(""); // Reset error on new submission
    
    // 3. Add basic validation
    if (!formData.username || !formData.password) {
      setError("Please enter both username and password");
      return;
    }

    // 4. Add mock authentication (replace with real API call)
    if (formData.username === "admin" && formData.password === "password") {
      login(); // This triggers the navigation in App.js
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username</label>
      <div>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter username"
        />
      </div>
      <label htmlFor="password">Password</label>
      <div>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />      
      </div>
      
      {/* 5. Display error message if exists */}
      {error && <div className="error-message">{error}</div>}
      
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;