import { useEffect } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { PopupContext } from "./PopupContext";


export const UserContext = createContext();

export const USER_ACTION_TYPES = {
  SET_AUTHOR: "SET_AUTHOR",
  SET_MACHINEID: "SET_MACHINEID",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_AUTHOR:
      return {
        ...state,
        author: action.payload,
      };
      case USER_ACTION_TYPES.SET_MACHINEID:
        return {
          ...state,
          machineId: action.payload,
        };
    default:
      return state;
    }
  };
  
  export function UserProvider({ children }) {
    
  useEffect(() => {
    if(!localStorage.getItem('machineId')){
      const mId = Date.now()
      localStorage.setItem('machineId', mId)
      setMachineId(mId)
    } else {
      setMachineId(localStorage.getItem('machineId'))
      setAuthor(localStorage.getItem('author'))
    }
  }, []);

  const [state, dispatch] = useReducer(userReducer, {
    author: null,
    machineId: null
  });

  const setAuthor = (author) => {
    dispatch({ type: USER_ACTION_TYPES.SET_AUTHOR, payload: author });
  };

  const setMachineId = (machineId) => {
    dispatch({ type: USER_ACTION_TYPES.SET_MACHINEID, payload: machineId });
  };

  return (
    <UserContext.Provider value={{ ...state, setAuthor }}>{children}</UserContext.Provider>
  );
}
