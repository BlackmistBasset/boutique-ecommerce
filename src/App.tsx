import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { Products } from './pages/Products';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';
import { Orders } from './pages/Orders';

import { Navbar } from './components/Navbar';

import { CssBaseline } from '@mui/material';
export const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />

      <Navbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
};
