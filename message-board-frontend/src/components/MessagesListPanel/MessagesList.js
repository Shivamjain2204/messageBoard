import React from 'react';
import './MessagesList.css';

const MessagesList = ({ messages }) => {
  return (
    <div className="MessagesList">
      <h2 className="custom-title">Messages</h2>

      <div className="message-list">
        <ul className="list-group">
          {messages.map((message, index) => (
            <li key={index} className="message-item">
              {parseMessage(message)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const parseMessage = (message) => {
  const [content, username] = message.split(' - ');
  console.log("Entered message: " + message + " User: " + username);

  return (
    <>
      <div className="message-content">{content}</div>
      <div className="message-username">-{username}</div>
    </>
  );
};

export default MessagesList;
