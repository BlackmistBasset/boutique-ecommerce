import { useFetch } from '../../hooks/useFetch';
import { Container } from '@mui/material';

import { Product } from '../../components/Product';
import { ProductType } from '../../types/products';
import { useGetProducts } from './Products.api';

export const Products = () => {
  const { response, error, loading } = useGetProducts();

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}

      {!loading && !error && (
        <Container
          sx={{
            justifyContent: 'center',
            gap: '20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 300px))'
          }}
        >
          {response?.data.map((product: ProductType) => {
            return <Product {...product} key={product.id} />;
          })}
        </Container>
      )}
    </>
  );
};
