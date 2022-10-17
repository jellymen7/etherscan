
import './App.css';
import Ca from './components/Ca';
import Eoa from './components/Eoa';
import Transacation from './components/Transaction';
import Main from './Main'
import React, { useState } from "react";
import "./App.css";
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/ca' element={<Ca />}></Route>
        <Route path='/eoa' element={<Eoa />}></Route>
        <Route path='/txn' element={<Transacation />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
