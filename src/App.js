// importing the axios libraries for making Ajax call
import axios from "axios";
import { useState } from "react";

function App() {
  // Datamembers
  let [title] = useState("API DEMO");
  let [messageList, setMessageList] = useState([]);

  // member fn
  let getAllMessages = async () => {
    let url = `http://localhost:3001/messages`;
    let responce = await axios.get(url); //featching url+data by the axios obj

    // Getting the Message From Server : And Re-rendering
    messageList = [...responce.data]; //cloning the all data from backend
    setMessageList(messageList);
  };

  return (
    <div>
      <h1>{title}</h1>

      <input
        type="button"
        value="Make Ajax/API Call"
        onClick={getAllMessages}
      />

      {messageList.map((item) => (
        <div>{item.message}</div>
        // message is the element of backend
      ))}
    </div>
  );
}

export default App;
