import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/sideBar";
import Routers from "./routers.js";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';

let store = createStore()

function App() {
  return (
    <div className='app'>
      <Provider store={ }>
        <Router>
          <SideBar />
          <Routers />
        </Router>
      </Provider>

    </div>
  );
}

export default App;
