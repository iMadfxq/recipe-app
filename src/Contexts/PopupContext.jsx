import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const PopupContext = createContext();

export const POPUP_ACTION_TYPES = {
  OPEN_POPUP_INGREDIENTS: "OPEN_POPUP_INGREDIENTS",
  OPEN_POPUP_STEPS: "OPEN_POPUP_STEPS",
  CLOSE_POPUP: 'CLOSE_POPUP',
  OPEN_POPUP_AUTHOR: 'OPEN_POPUP_AUTHOR'
};

const popupReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_POPUP_INGREDIENTS":
      return {
        popupIsOpen: true,
        type: "ingredientsList",
        data: [...action.payload.data],
        setterFunc: action.payload.setterFunc,
      };
    case "OPEN_POPUP_STEPS":
      return {
        popupIsOpen: true,
        type: "stepsList",
        data: [...action.payload.data],
        setterFunc: action.payload.setterFunc,
      };
    case POPUP_ACTION_TYPES.CLOSE_POPUP:
      return {
        ...state,
        popupIsOpen: false,
      };
    case POPUP_ACTION_TYPES.OPEN_POPUP_AUTHOR:
      return {
        ...state,
        popupIsOpen: true,
        type: "author",
      }

    default:
      return state;
  }
};

export function PopupProvider({ children }) {

  const [state, dispatch] = useReducer(popupReducer, {
    popupIsOpen: false,
    type: "",
    data: [],
    setterFunc: () => {},
  });

  const closePopup = () => {
    dispatch({ type: POPUP_ACTION_TYPES.CLOSE_POPUP});
  }

  const openPopup = (actionType, data) => {
    dispatch({ type: actionType, payload: { ...data } });
  };

  return (
    <PopupContext.Provider value={{ ...state, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
}
