import { useState, useEffect } from "react";
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom'
import Mytodo from "./pages/Mytodo";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <div>
      <AuthContextProvider>
      <Header />
      <Routes>
        <Route 
          path='/Mytodo' 
          element={
            <ProtectedRoute>
              <Mytodo />
            </ProtectedRoute>} 
          />
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
