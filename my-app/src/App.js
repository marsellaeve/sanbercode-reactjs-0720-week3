import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./tugas15/Routes";
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;