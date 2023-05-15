import React from "react";
import Home from "./components/home/home";
import Login from "./components/login/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import MrDataDisplay from "./components/dataDisplay/mrDataDisplay";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div> <Home /> </div>} />
        <Route path="/login" element={<><Login /></>}></Route>
        <Route path="/mr/details/:company/:id" element={<><MrDataDisplay /></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
