import {
  TextField,
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  InputAdornment
} from '@mui/material';

import { PiLessThanBold, PiGreaterThanBold } from 'react-icons/pi';
import { ProductType } from '../types/products';
export const Product = ({ image, price, stock, name, description }: ProductType) => {
  return (
    <Card sx={{ maxWidth: 345, display: 'grid', gridTemplateRows: 'subgrid', gridRow: 'span 4', gap: '0px' }}>
      <CardMedia component="img" alt="product image" image={image} sx={{ maxHeight: '200px', objectFit: 'contain' }} />
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
          defaultValue={1}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ cursor: 'pointer' }}>
                <PiLessThanBold />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                <PiGreaterThanBold />
              </InputAdornment>
            ),
            sx: {
              width: '100px',
              mx: 'auto',
              '& .MuiInputBase-input': {
                textAlign: 'center'
              }
            }
          }}
          inputProps={{
            maxLength: 2 // Set the maximum length here
          }}
        />
      </CardActions>
      <Button variant="contained" sx={{ display: 'block', mx: 'auto', mb: '20px' }}>
        Buy
      </Button>
    </Card>
  );
};
