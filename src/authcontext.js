import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./authreducer";

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    console.log(state.currentUser)
    localStorage.setItem("user", JSON.stringify(state.currentUser));
    if(state.currentUser && state.currentUser.user.uid){
      localStorage.setItem("id",state.currentUser.user.uid)
    }
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};