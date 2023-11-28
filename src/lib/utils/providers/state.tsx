"use client";

import React, {
  createContext,
  useReducer,
  Dispatch,
  ReactNode,
  useMemo,
  useContext,
} from "react";

// Define the state type
interface StateStoreType {
  searchDialog: boolean;
  createDialog: boolean;
}

// Define the action types
type Action =
  | { type: "SET_SEARCH_DIALOG"; payload: boolean }
  | { type: "SET_CREATE_DIALOG"; payload: boolean };

// Define the context type
interface StoreContextType {
  state: StateStoreType;
  dispatch: Dispatch<Action>;
}

// Create a context with initial values for state
const StateContext = createContext<StoreContextType | undefined>(undefined);

// Define the reducer function
const reducer = (state: StateStoreType, action: Action): StateStoreType => {
  switch (action.type) {
    case "SET_SEARCH_DIALOG":
      return { ...state, searchDialog: action.payload };
    case "SET_CREATE_DIALOG":
      return { ...state, createDialog: action.payload };
    default:
      return state;
  }
};

// Create the context provider component
interface StateProviderProps {
  children: ReactNode;
}

const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  // Use useReducer to manage state
  const [state, dispatch] = useReducer(reducer, {
    searchDialog: false,
    createDialog: false,
  });

  // Memoize the context values with useMemo
  const value = useMemo<StoreContextType>(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

const useStateContext = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useStateContext must be used inside the StateProvider");
  }

  return context;
};

export { StateContext, StateProvider, useStateContext };
