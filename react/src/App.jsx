// import { useState } from "react";
import "./App.css";
// import { MoodProvider } from "./Context/MoodContext";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <MoodProvider> */}
      <NavBar />
      <AppRoutes />

      {/* </MoodProvider> */}
    </>
  );
}

export default App;
