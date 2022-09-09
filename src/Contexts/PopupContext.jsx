import { createContext } from "react";

export const PopupContext = createContext();

export function PopupProvider({ children }) {
  return (
    <PopupContext.Provider value={{ popupIsOpen: false, type: "", data: [] }}>
      {children}
    </PopupContext.Provider>
  );
}
