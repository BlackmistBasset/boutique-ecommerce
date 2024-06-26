import {
  TextField,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  InputAdornment,
  IconButton,
  Snackbar,
  Alert
} from '@mui/material';
import { useState, MouseEvent } from 'react';

import { PiLessThanBold, PiGreaterThanBold } from 'react-icons/pi';
import { ProductType } from '../types/products';
import { useOrder } from '../context/OrderContext';

export const Product = ({ image, price, stock, name, id, description }: ProductType) => {
  const [quantity, setQuantity] = useState<number | ''>(1);
  const [open, setOpen] = useState<boolean>(false);
  const { addProduct, currentOrder } = useOrder();

  const handleShowNotification = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleAddQuantity: (event: MouseEvent<HTMLButtonElement>) => void = (event) => {
    if (typeof quantity === 'number') {
      setQuantity(quantity + 1);
    }
  };

  const handleRemoveQuantity: (event: MouseEvent<HTMLButtonElement>) => void = (event) => {
    if (typeof quantity === 'number') {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (newValue === '' || (!isNaN(Number(newValue)) && Number(newValue) >= 1 && Number(newValue) <= stock)) {
      setQuantity(newValue === '' ? '' : Number(newValue));
    }
  };

  const handleAddProduct = () => {
    addProduct({
      productName: name,
      productId: id,
      price: price,
      quantity: quantity || Number(quantity)
    });
    handleShowNotification();
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, display: 'grid', gridTemplateRows: 'subgrid', gridRow: 'span 4', gap: '0px' }}>
        <CardMedia
          component="img"
          alt="product image"
          image={image}
          sx={{ maxHeight: '200px', objectFit: 'contain' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: '10px' }}>
            Avaiable: {stock}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold', mt: '10px' }}>
            Price: ${price}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <TextField
            variant="outlined"
            size="small"
            value={quantity === '' ? '' : Number(quantity)}
            onChange={handleQuantityChange}
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ cursor: 'pointer' }}>
                  <IconButton
                    onClick={handleRemoveQuantity}
                    disabled={typeof quantity === 'number' && quantity <= 1}
                    size="small"
                    sx={{ width: '25px' }}
                  >
                    <PiLessThanBold />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                  <IconButton
                    onClick={handleAddQuantity}
                    disabled={(typeof quantity === 'number' && quantity >= 99) || quantity === stock}
                    size="small"
                    sx={{ width: '25px' }}
                  >
                    <PiGreaterThanBold />
                  </IconButton>
                </InputAdornment>
              ),
              sx: {
                width: '130px',
                mx: 'auto',
                '& .MuiInputBase-input': {
                  textAlign: 'center',
                  '&::-webkit-outer-spin-button': {
                    display: 'none'
                  },
                  '&::-webkit-inner-spin-button': {
                    display: 'none'
                  },
                  MozAppearance: 'textfield'
                }
              }
            }}
          />
        </CardActions>
        <Button
          disabled={quantity === ''}
          variant="contained"
          sx={{ display: 'block', mx: 'auto', mb: '20px' }}
          onClick={handleAddProduct}
        >
          Add to cart
        </Button>
      </Card>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ marginTop: '50px' }}
      >
        <Alert severity="success">Product added to cart!</Alert>
      </Snackbar>
    </>
  );
};
