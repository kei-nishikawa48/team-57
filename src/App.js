// App.js
import React from "react";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Room from "./pages/Room";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./AuthService";
import LoggedInRoute from "./LoggedInRoute"
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <LoggedInRoute exact path="/" component={Room} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;

//雛形作成
//npx create-react-app chatapp
//yarn create react-app chatapp

//src/pagesフォルダ作成
//Login.jsxをpagesフォルダの中に作成
//SignUp.jsxをpagesフォルダの中に作成
//Room.jsxをpagesフォルダの中に作成
//上3つのファイルに丸っとカリキュラムの内容をコピーアンドペースト
