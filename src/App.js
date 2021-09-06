import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/sideBar";
import Routers from "./routers.js";

import './App.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <SideBar />
        <Routers />
      </Router>
    </div>
  );
}

export default App;
