import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Products } from './pages/Products';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';
import { Orders } from './pages/Orders';

import { Navbar } from './components/Navbar';

import { CssBaseline } from '@mui/material';
import { useAuth } from './context/AuthContext';
import { OrderProvider } from './context/OrderContext';
export const App = () => {
  const { isAuthenticated } = useAuth();
  return (
    <BrowserRouter>
      <OrderProvider>
        <CssBaseline />
        <Navbar />

        <Routes>
          <Route path="/" element={isAuthenticated ? <Products /> : <Navigate to="/login" />} />
          <Route path="/products" element={isAuthenticated ? <Products /> : <Navigate to="/login" />} />
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/products" />} />
          <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/login" />} />
          <Route path="/orders" element={isAuthenticated ? <Orders /> : <Navigate to="/login" />} />
        </Routes>
      </OrderProvider>
    </BrowserRouter>
  );
};
