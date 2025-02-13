import { createContext, useContext, useState } from "react";

type MenuContextProviderProps = {
  children: React.ReactNode;
};

type MenuContext = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuContext = createContext<MenuContext | null>(null);

export function MenuContextProvider({ children }: MenuContextProviderProps) {
  const [menu, setMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext(menuContext: React.Context<MenuContext | null>) {
  const context = useContext(menuContext);

  if (!context) {
    throw new Error("UseMenuContext has to be within MenuContextProvider ...");
  } else {
    return context;
  }
}
