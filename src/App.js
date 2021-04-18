import React from "react";
import SideBar from "./components/sideBar";
import Routers from "./routers.js";
import './App.css';

function App() {
  return (
    <div className='app'>
      <SideBar />
      <Routers/>
    </div>
  );
}

export default App;
