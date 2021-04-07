import React from "react";
import "./styles.scss";

type Props = {
  content: string;
  createdAt: string;
  createdBy: string;
};

const ChatPost = ({ content, createdAt, createdBy }: Props) => {
  return (
    <div className="chat-post">
      <div className="chat-post__content">
        <div className="chat-post__img">L</div>
        <h3 className="chat-post__title">
          {createdBy} <span>{createdAt}</span>
        </h3>
        <p className="chat-post__text">{content}</p>
      </div>
    </div>
  );
};

export default ChatPost;
