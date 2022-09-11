import { useReducer } from "react";
import { createContext } from "react";

export const PopupContext = createContext();

export const POPUP_ACTION_TYPES = {OPEN_POPUP_INGREDIENTS: 'OPEN_POPUP_INGREDIENTS'}

const popupReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_POPUP_INGREDIENTS":
      return {
        popupIsOpen: true,
        type: "ingredientsList",
        data: [...action.payload],
      };
    default:
      return state
  }
};

export function PopupProvider({ children }) {

  const [state, dispatch] = useReducer(popupReducer, {popupIsOpen: false, type: "", data: []})

  const openPopup = (actionType, data) => {
    dispatch({type: actionType, payload: data})
  }

  return (
    <PopupContext.Provider value={{...state, openPopup}}>
      {children}
    </PopupContext.Provider>
  );
}
