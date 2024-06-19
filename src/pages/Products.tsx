import { useFetch } from '../hooks/useFetch';
import { CircularProgress, Container, Alert } from '@mui/material';

import { Product } from '../components/Product';
import { ProductType } from '../types/products';

export const Products = () => {
  const { response, error, loading } = useFetch({
    method: 'GET',
    url: `/products`
  });

  return (
    <>
      <Container
        sx={{
          justifyContent: 'center',
          gap: '20px',
          marginTop: '100px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 300px))'
        }}
      >
        {loading && <CircularProgress sx={{ gridColumn: 'span 3', justifySelf: 'center' }} />}
        {error && (
          <Alert severity="error" sx={{ gridColumn: 'span 3', justifySelf: 'center' }}>
            We're sorry, but the following error ocurred: {error.message}. Please try again later.
          </Alert>
        )}

        {!loading &&
          !error &&
          response?.data.map((product: ProductType) => {
            return <Product {...product} key={product.id} />;
          })}
      </Container>
    </>
  );
};
