import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  // 1. Add authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 2. Create login/logout functions
  const login = () => {
    setIsLoggedIn(true);
    // You could add token storage here for persistent login
  };

  const logout = () => {
    setIsLoggedIn(false);
    // You could clear stored tokens here
  };

  // 3. Add automatic navigation based on auth status
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // Redirect to home after login
    } else {
      navigate("/login"); // Redirect to login when logged out
    }
  }, [isLoggedIn]);

  return (
    <div className="app">
      {/* 4. Conditionally show NavBar or redirect to login */}
      {isLoggedIn ? (
        <NavBar logout={logout} />
      ) : (
        <Navigate to="/login" replace={true} />
      )}
      
      {/* 5. Pass login function to child routes */}
      <Outlet context={login} />
    </div>
  );
}

export default App;