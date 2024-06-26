import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { OrderType, OrderContextType, OrderProductType } from '../types/orders';
import { useAuth } from './AuthContext';

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  const initialOrder: OrderType = {
    products: [],
    date: new Date().toISOString(),
    total: 0,
    userType: user?.userType || '',
    userName: user?.username || ''
  };

  const [currentOrder, setCurrentOrder] = useState<OrderType>(() => {
    const storedOrder = localStorage.getItem('order');
    return storedOrder ? JSON.parse(storedOrder) : initialOrder;
  });

  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(currentOrder));
  }, [currentOrder]);

  const addProduct = (product: OrderProductType) => {
    setCurrentOrder((prevOrder) => {
      const existingProductIndex = prevOrder.products.findIndex((p) => p.productId === product.productId);
      let updatedProducts;
      if (existingProductIndex !== -1) {
        updatedProducts = prevOrder.products.map((p, index) =>
          index === existingProductIndex ? { ...p, quantity: product.quantity } : p
        );
      } else {
        updatedProducts = [...prevOrder.products, product];
      }

      const updatedTotal = updatedProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const updatedOrder = {
        ...prevOrder,
        products: updatedProducts,
        total: updatedTotal
      };
      // console.log('Product added:', updatedOrder);
      return updatedOrder;
    });
  };

  const removeProduct = (productId: string) => {
    setCurrentOrder((prevOrder) => {
      const updatedProducts = prevOrder.products.filter((product) => product.productId !== productId);
      const updatedTotal = updatedProducts.reduce((sum, item) => sum + item.price * item.quantity, 0);

      return {
        ...prevOrder,
        products: updatedProducts,
        total: updatedTotal
      };
    });
  };

  return (
    <OrderContext.Provider value={{ currentOrder, addProduct, removeProduct, setCurrentOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};
