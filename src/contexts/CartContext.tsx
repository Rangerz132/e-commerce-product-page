import { createContext, useContext, useState } from "react";

type CartContextProviderProps = {
  children: React.ReactNode;
};

type CartContext = {
  cart: boolean;
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CartContext = createContext<CartContext | null>(null);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<boolean>(false);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext(cartContext: React.Context<CartContext | null>) {
  const context = useContext(cartContext);

  if (!context) {
    throw new Error("useCartContext must be within CartContextProvider...");
  } else {
    return context;
  }
}
