import React, { useState } from 'react';
import LoginForm from "../components/LoginForm";
import { UserProvider } from "../Context/UserContext";
import backgroundImage from "../assets/images/group105.jpg"; // Adjust the import path as needed

function LoginPage() {
  const pageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    // minWidth: "175vh",
  };

  return (
    <div className="LoginPage" style={pageStyle}> 
      <UserProvider>
        <LoginForm />
      </UserProvider>
    </div>
  );
}

export default LoginPage;
