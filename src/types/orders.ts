export type OrderProductType = {
  productName: string;
  productId: string;
  price: number;
  quantity: number;
};

export type OrderType = {
  products: OrderProductType[];
  date: string;
  total: number;
  userType: string | undefined;
  userName: string | undefined;
};

export type OrderContextType = {
  addProduct: (product: OrderProductType) => void;
  removeProduct: (productId: string) => void;
  currentOrder: OrderType;
  setCurrentOrder: (order: OrderType) => void;
};
