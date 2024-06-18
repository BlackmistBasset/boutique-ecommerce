import { useFetch } from '../../hooks/useFetch';

// Función para obtener los productos
export const useGetProducts = () => {
  return useFetch({
    method: 'GET',
    url: `/products`
  });
};
