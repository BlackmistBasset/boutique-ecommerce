import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { Products } from './modules/products/Products';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';

import { Typography } from '@mui/material';
export const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Typography variant="h5" sx={{ marginBlock: '30px' }}>
          Boutique avaiable products
        </Typography>
        {/* <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>*/}
      </div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
