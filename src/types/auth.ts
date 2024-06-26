import { OrderType } from './orders';

export type UserType = {
  username: string;
  userType: string;
  password: string;
  orders: OrderType[];
};

export type AuthContextType = {
  isAuthenticated: boolean;
  login: (user: UserType) => void;
  logout: () => void;
  user: UserType | null;
};
