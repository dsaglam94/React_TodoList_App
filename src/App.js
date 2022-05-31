import { useState, useEffect } from "react";
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom'
import Mytodo from "./pages/Mytodo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/Mytodo' element={<Mytodo />} />
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
