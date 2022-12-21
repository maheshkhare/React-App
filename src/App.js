// Storing Hardcoded data to the database
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  //Data Members
  let [title] = useState("API DEMO");
  let [messageList, setMessageList] = useState([]);

  // Spl fn :: HOOK :: Like Contructor :: called while component is initialized
  useEffect(() => {
    getAllMessages();
  });

  // Member fn
  let getAllMessages = async () => {
    let url = `http://localhost:3001/messages`;
    let response = await axios.get(url);

    // Getting the Message From Server :: And re-rendering
    messageList = [...response.data];
    setMessageList(messageList);
  };

  let createNewMessage = async () => {
    let url = `http://localhost:3001/message`;

    let data = {
      message: "Hello mahi",
      reply: true,
    };

    await axios.post(url, data);

    // To refresh the content
    getAllMessages();
  };

  return (
    <div>
      <h1>{title}</h1>

      <input
        type="button"
        value="Make Ajax/API GET Call"
        onClick={getAllMessages}
      />

      <input
        type="button"
        value="Make Ajax/API POST Call"
        onClick={createNewMessage}
      />

      {messageList.map((item, index) => (
        <div key={index}>{item.message}</div>
      ))}
    </div>
  );
}

export default App;
