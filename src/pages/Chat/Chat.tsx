import React, { useEffect, useState } from "react";
import "./styles.scss";
import { auth, db } from "../../services/firebase";
import Navbar from "../../components/Navbar/Navbar";
import ChatPost from "../../components/ChatPost/ChatPost";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    db.ref("chats").on("value", (snapshot) => {
      let chats: ChatTypes[] = [];
      snapshot.forEach((snap) => {
        chats.push(snap.val());
      });
      setChats(chats);
      setIsLoading(false);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (content === "") return;

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
      {isLoading ? (
        <LoadingSpinner />
      ) : (
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

            <form onSubmit={handleSubmit} className="chat__form">
              <input
                onChange={(e) => setContent(e.target.value)}
                value={content}
                autoFocus
                className="chat__form--input"
              ></input>
              <button className="chat__form--btn btn">Send</button>
            </form>

            <div>
              Logged in as: <strong>{user?.displayName}</strong> -{user?.email}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Chat;
