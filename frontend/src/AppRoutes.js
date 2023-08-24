import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import AdminPage from './Pages/AdminPage/AdminPage';
import RegisterForm from './components/RegisterForm/RegisterForm';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/register' element={<RegisterForm />} />
    </Routes>
  );
};

export default AppRoutes;
