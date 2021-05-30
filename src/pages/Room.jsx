// Room.js
import React, { useState, useEffect, useContext } from "react";
import firebase from "../config/firebase";
import Item from "../components/Item";
import { AuthContext } from "../AuthService";
const Room = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const user = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.firestore().collection("messages").add({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(), //サーバーにデータが入ったときの日付データを入れる
      user: user.displayName, //userの名前をいれる
      content: value,
    });
  };
  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .orderBy("createdAt", "asc")
      .where("user", "==", "kei")
      .onSnapshot((snapshot) => {
        //[doc,doc]
        const messages = snapshot.docs.map((doc) => {
          console.log(doc.data());
          return doc.data();
        });
        setMessages(messages);
      });
  }, []);

  return (
    <>
      <h1>Room</h1>
      <ul>
        {messages.map((message) => {
          return <Item message={message} />;
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
      <button onClick={() => firebase.auth().signOut()}>Logout</button>
    </>
  );
};

export default Room;
