import React, { useEffect, useState } from "react";
import "./styles.scss";

import Navbar from "../../components/Navbar/Navbar";

import { auth, db } from "../../services/firebase";

const Chat = () => {
  const [user] = useState(auth().currentUser);
  const [content, setContent] = useState("");
  const [chats, setChats] = useState<{ timestamp: string; content: string }[]>([]);

  useEffect(() => {
    db.ref("chats").on("value", (snapshot) => {
      let chats: { content: string; timestamp: string }[] = [];
      snapshot.forEach((snap) => {
        chats.push(snap.val());
      });
      setChats(chats);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await db.ref("chats").push({
        content: content,
        timestamp: Date.now(),
        uid: user?.uid,
      });
      setContent("");
    } catch (error) {
      // this.setState({ writeError: error.message });
    }
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
        <input onChange={(e) => setContent(e.target.value)} value={content}></input>
        {/* {this.state.error ? <p>{this.state.writeError}</p> : null} */}
        <button>Post</button>
      </form>
      <div>
        Logged in as: <strong>{user?.email}</strong>
      </div>
    </>
  );
};

export default Chat;
