import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import "./App.css";
import Home from "./components/pages/Home";
import Planos from "./components/pages/Planos";
import Cadastro from './components/pages/Cadastro';
import Equipe from './components/pages/equipe'
import AllUsers from "./components/pages/users";
import Update from "./components/pages/update";




function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/equipe" element={<Equipe />} />
          <Route path="/users" element={<AllUsers />} />
                  <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
