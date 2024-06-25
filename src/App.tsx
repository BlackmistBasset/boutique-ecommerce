import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Products } from './pages/Products';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';
import { Orders } from './pages/Orders';

import { Navbar } from './components/Navbar';

import { CssBaseline } from '@mui/material';
import { useAuth } from './context/AuthContext';

export const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={isAuthenticated ? <Products /> : <Navigate to="/login" />} />
        <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/products" />} />
        <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/orders" element={isAuthenticated ? <Orders /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
