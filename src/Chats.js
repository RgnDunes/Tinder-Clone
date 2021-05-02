import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sayan Mondal"
        message="Ye le assignment."
        timestamp="40 sec ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      />
      <Chat
        name="Ankit Kumar"
        message="Padh le saale"
        timestamp="4 hrs ago"
        // profilePic=""
      />
      <Chat
        name="Soumodeep Naskar"
        message="Yo bro...PUBG join now."
        timestamp="1 day ago"
        // profilePic=""
      />
      <Chat
        name="Neeladri Kar"
        message="Abey sunna"
        timestamp="20 mins ago"
        profilePic="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
      />
    </div>
  );
}

export default Chats;
