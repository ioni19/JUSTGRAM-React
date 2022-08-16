import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from './pages/Login/Login'
import './pages/Login/Login.scss'
import Main from './pages/Main/Main'
import './pages/Main/Main.scss'


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
