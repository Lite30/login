// App.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/Navbar/Navbar'; 
import Logout from './Components/Logout/Logout';
import Home from './Components/Home/Home';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <Router>
      {isLoggedIn && <Navbar onLogout={handleLogout}/>}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Home/>} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginRegister onLogin={handleLogin} />} />
        {isLoggedIn ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
