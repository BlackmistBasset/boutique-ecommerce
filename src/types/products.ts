export interface ProductType {
  id: string;
  image: string;
  price: number;
  stock: number;
  name: string;
  description: string;
}

export interface CartProductType {
  productName: string;
  quantity: number;
  id: string;
  price: number;
}

export interface CartInterface {
  open: boolean;
  setOpen: (newOpen: boolean) => void;
}
