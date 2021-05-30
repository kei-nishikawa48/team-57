// AuthService.js
import React, { useState, useEffect, createContext } from "react";
import firebase from "./config/firebase";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    //レンダリングが終わった後に実行
    firebase.auth().onAuthStateChanged((user) => {
      //login logoutが実行されたら実行
      setUser(user);
    });
  }, []); //第二引数に[]を入れることで初回レンダリング時のみ実行
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
