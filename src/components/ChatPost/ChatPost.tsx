import React from "react";
import "./styles.scss";
import dateFormat from "dateformat";

type Props = {
  content: string;
  createdAt: string;
  createdBy: string;
};

const ChatPost = ({ content, createdAt, createdBy }: Props) => {
  const renderCreatedAt = (date: string) => {
    const day = dateFormat(date, "DDDD");
    return day === "Today" || day === "Yesterday"
      ? `${day} at ${dateFormat(date, "HH:MM TT")}`
      : `${dateFormat(date, "d mmmm")} at ${dateFormat(date, "HH:MM TT")}`;
  };

  return (
    <div className="chat-post">
      <div className="chat-post__content">
        <div className="chat-post__img">
          <p>{createdBy[0].toUpperCase()}</p>
        </div>
        <h3 className="chat-post__title">
          {createdBy} <span>{renderCreatedAt(createdAt)}</span>
        </h3>
        <p className="chat-post__text">{content}</p>
      </div>
    </div>
  );
};

export default ChatPost;