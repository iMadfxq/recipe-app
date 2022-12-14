import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { projectFirestore } from "../firebase/config";

export const RecipesContext = createContext();

export const RECIPES_ACTION_TYPES = {
  RECIPES_DATA: "RECIPES_DATA",
  RECIPES_ERROR: "RECIPES_ERROR",
};

const recipesReducer = (state, action) => {
  switch (action.type) {
    case RECIPES_ACTION_TYPES.RECIPES_DATA:
      return {
        data: [...action.payload],
        error: null,
        isPending: false,
      };
    case RECIPES_ACTION_TYPES.RECIPES_ERROR:
      return {
        data: null,
        error: action.payload,
        isPending: false,
      };
    default:
      return state;
  }
};

export function RecipesProvider({ children }) {
  useEffect(() => {
    let unsub = projectFirestore
      .collection("suggestedRecipes")
      .onSnapshot((snapshot) => {
        let results = [];
        if (snapshot.empty) {
          setError("Looks like there are no recipes :(");
          return;
        }
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setData(results);
      }, (er) => {
        setError('There was an error fetching the data: '+ er)
      });

      return () => {unsub()}
  }, []);
 
  const [state, dispatch] = useReducer(recipesReducer, {
    data: null,
    error: null,
    isPending: true,
  });

  const setError = (error) => {
    dispatch({ type: RECIPES_ACTION_TYPES.RECIPES_ERROR, payload: error });
  };

  const setData = (data) => {
    dispatch({ type: RECIPES_ACTION_TYPES.RECIPES_DATA, payload: data });
  };

  return (
    <RecipesContext.Provider value={{ ...state }}>
      {children}
    </RecipesContext.Provider>
  );
}
