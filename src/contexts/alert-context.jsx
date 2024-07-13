import { createContext, useReducer } from "react";

export const initialState = {
  text: "",
  type: "",
};

const alertReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALERT":
      return { ...action.payload };
    case "HIDE_ALERT":
      return initialState;
    default:
      return state;
  }
};

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, initialState);

  return (
    <AlertContext.Provider value={{ state, dispatch }}>
      {children}
    </AlertContext.Provider>
  );
};
