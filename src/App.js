// Storing Hardcoded data to the database
import axios from "axios";
import { useEffect, useRef, useState } from "react";

function App() {
  //Data Members
  let [title] = useState("API DEMO");
  let inputRef = useRef();
  let [message, setMessage] = useState("");
  let [messageList, setMessageList] = useState([]);

  useEffect(() => {
    getAllMessages();
  }, []);

  let handleOnChangeMessage = (e) => {
    setMessage(e.target.value);
  };

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

    if (!inputRef.current.checkValidity()) {
      alert("Invalid");
      return;
    }

    let data = {
      message: message,
      reply: true,
    };

    await axios.post(url, data);

    setMessage(""); //make empty to textbox

    // To refresh the content
    getAllMessages();
  };

  let checkEnterCode = (e) => {
    if (e.keyCode == 13) {
      createNewMessage();
    }
  };

  return (
    <div>
      <h1>{title}</h1>

      <input
        type="text"
        placeholder="Hi...whatsapp...!!"
        value={message} //this is for empty the textbox
        onChange={handleOnChangeMessage}
        onKeyUp={checkEnterCode}
        ref={inputRef} //document.querySelector() for onkeyup
        required
        minLength={2}
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
