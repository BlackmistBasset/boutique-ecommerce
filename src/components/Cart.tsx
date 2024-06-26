import { IoIosClose } from 'react-icons/io';

import { Box, Typography, Drawer, Button } from '@mui/material';

import { CartInterface } from '../types/products';

import { useOrder } from '../context/OrderContext';

import { CartProduct } from './CartProduct';
import { useAuth } from '../context/AuthContext';

export const Cart = ({ open, setOpen }: CartInterface) => {
  const { currentOrder, setCurrentOrder } = useOrder();
  const { user } = useAuth();

  const handleDeleteCart = () => {
    localStorage.removeItem('order');
    setCurrentOrder({
      products: [],
      date: new Date().toISOString(),
      total: 0,
      userType: user?.userType || '',
      userName: user?.username || ''
    });
  };

  return (
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <Box sx={{ padding: '20px', position: 'relative' }}>
        <IoIosClose onClick={() => setOpen(false)} style={{ fontSize: '30px', position: 'absolute', right: '20px' }} />
        <Typography variant="h4" sx={{ marginBlock: '20px' }}>
          Cart
        </Typography>
        {currentOrder?.products.length > 0 ? (
          currentOrder?.products.map(({ productName, price, quantity, productId }) => {
            return (
              <CartProduct productName={productName} price={price} quantity={quantity} key={productId} id={productId} />
            );
          })
        ) : (
          <p>Cart is empty. Please select some products</p>
        )}
      </Box>

      {currentOrder?.products.length > 0 && (
        <Box sx={{ padding: '20px', display: 'grid' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', justifySelf: 'end' }}>
            Total: ${currentOrder.total}
          </Typography>
          <Button variant="contained" sx={{ mt: '30px' }}>
            Confirm Order
          </Button>
          <Typography
            sx={{
              mt: '20px',
              fontSize: '13px',
              color: 'red',
              cursor: 'pointer',
              ':hover': { textDecoration: 'underline' },
              justifySelf: 'end'
            }}
            onClick={handleDeleteCart}
          >
            Delete this Cart
          </Typography>
        </Box>
      )}
    </Drawer>
  );
};
