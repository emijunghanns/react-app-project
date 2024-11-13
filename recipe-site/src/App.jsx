import "./App.css";
import Homepage from "./Homepage";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {/* <Homepage /> it does to repeat navar, sidebar and footer again*/}
      <Footer />
    </div>
  );
}

export default App;
