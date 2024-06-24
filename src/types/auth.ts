export type UserType = {
  username: string;
  userType: string;
  password: string;
  orders: any[]; // Replace with a more specific type if you know the structure of orders
};

export type AuthContextType = {
  isAuthenticated: boolean;
  login: (user: UserType) => void;
  logout: () => void;
  user: UserType | null;
};
