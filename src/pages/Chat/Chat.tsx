import React, { useEffect, useState } from "react";
import "./styles.scss";

import Navbar from "../../components/Navbar/Navbar";

import { auth, db } from "../../services/firebase";

type ChatTypes = {
  timestamp: string;
  content: string;
  uid: string;
};

const Chat = () => {
  const [user] = useState(auth().currentUser);
  const [content, setContent] = useState("");
  const [chats, setChats] = useState<ChatTypes[]>([]);

  useEffect(() => {
    db.ref("chats").on("value", (snapshot) => {
      let chats: ChatTypes[] = [];
      snapshot.forEach((snap) => {
        chats.push(snap.val());
      });
      setChats(chats);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await db.ref("chats").push({
      content: content,
      timestamp: Date.now(),
      uid: user?.uid,
    });
    setContent("");
  };

  return (
    <>
      <Navbar />
      <div className="chat">
        {chats.map((chat) => {
          return <p key={chat.timestamp}>{chat.content}</p>;
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setContent(e.target.value)}
          value={content}
          autoFocus
        ></input>
        <button>Post</button>
      </form>
      <div>
        Logged in as: <strong>{user?.email}</strong>
      </div>
    </>
  );
};

export default Chat;
