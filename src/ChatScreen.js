import React, { useState, useEffect } from "react";
import "./ChatScreen.css";
import {
  Link,
  BrowserRouter as Router,
  Route,
  useParams,
} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const { person } = useParams();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Sayan Mondal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      message: "Text 1",
    },
    {
      name: "Sayan Mondal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      message: "Text 2",
    },
    {
      message: "Test 3",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        You matched with {person} on 10/09/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              src={message.image}
              alt={message.name}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="type a message..."
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen__inputButton"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
