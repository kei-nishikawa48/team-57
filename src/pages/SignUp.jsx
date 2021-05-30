// SignUp.js
import React, { useState } from "react";
import { auth } from "../config/firebase";

const SignUp = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {//ボタンを押した時のイベント
    e.preventDefault();
    //サインアップの処理をかく
    auth
      .createUserWithEmailAndPassword(email, password)//emailとpasswordを使ってuserを作成
      .then(({user}) => { //作成されたユーザーの情報を受け取る
        user.updateProfile({ //userのデータをアップデートする関数を実行
          displayName:name//displayNameに入力されたデータを追加
        })
        history.push("/");//roomコンポーネントを表示
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            type="name"
            id="name"
            placeholder="Name"
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            value={password}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
