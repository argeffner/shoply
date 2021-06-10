import React from "react";
import Routes from "./Routes";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <main>
      <Navbar />
      <div>
        <Routes />
      </div>
    </main>
  );
}

export default App;
