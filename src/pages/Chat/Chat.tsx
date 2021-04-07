import React, { useEffect, useState } from "react";
import "./styles.scss";
import { auth, db } from "../../services/firebase";

import Navbar from "../../components/Navbar/Navbar";
import ChatPost from "../../components/ChatPost/ChatPost";

type ChatTypes = {
  createdAt: string;
  content: string;
  uid: string;
  createdBy: string;
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
      createdAt: Date.now(),
      createdBy: user?.displayName,
      uid: user?.uid,
    });
    setContent("");
  };

  return (
    <>
      <Navbar />

      <section className="chat">
        <div className="chat__container">
          <div className="chat__content">
            {chats.map((chat, i) => {
              return (
                <ChatPost
                  key={i}
                  content={chat.content}
                  createdAt={chat.createdAt}
                  createdBy={chat.createdBy}
                />
              );
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
        </div>
      </section>
    </>
  );
};

export default Chat;
