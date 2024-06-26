import React from 'react';

import { Box, Typography } from '@mui/material';

import { CartProductType } from '../types/products';
import { useOrder } from '../context/OrderContext';

export const CartProduct = ({ productName, price, quantity, id }: CartProductType) => {
  const { removeProduct } = useOrder();
  return (
    <Box
      sx={{
        borderBottom: '1px dotted black',
        width: '300px',
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        justifyContent: 'space-between',
        paddingBlock: '6px',
        marginBottom: '10px'
      }}
    >
      <Typography>
        {productName} x{quantity}
      </Typography>
      <Typography sx={{ justifySelf: 'end', fontSize: '14px' }}>${price}</Typography>

      <Typography sx={{ fontSize: '12px' }}>Subtotal:</Typography>
      <Typography sx={{ justifySelf: 'end', fontSize: '14px', fontWeight: 'bold' }}>${quantity * price}</Typography>
      <Typography
        sx={{ fontSize: '10px', color: 'red', cursor: 'pointer', ':hover': { textDecoration: 'underline' } }}
        onClick={() => removeProduct(id)}
      >
        Delete this product
      </Typography>
    </Box>
  );
};
