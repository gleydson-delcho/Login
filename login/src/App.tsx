import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

import { AuthContextProvider, authContext } from './contexts/Auth';
import Welcome from './pages/Welcome';



export const App = () => {

  const Private = ({ children }: { children: JSX.Element }) => {
    const { user } = useContext(authContext);
    if (user?.auth !== true) {
      return <Navigate to="/" />;
    }
    return children;
  }

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Welcome />}></Route>
          <Route path="/register" element={<Register />} />
        </Routes>

      </BrowserRouter>
    </AuthContextProvider>
  );
}
