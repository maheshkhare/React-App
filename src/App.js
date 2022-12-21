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
      <h1 className="bg-dark text-light p-3 sticky-top">{title}</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="d-flex">
            <input
              className="form-control form-control-lg"
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
              className="btn btn-secondary"
              type="button"
              value="Add"
              onClick={() => createNewMessage(false)}
            />

            <input
              className="btn btn-secondary"
              type="button"
              value="Reply"
              onClick={() => createNewMessage(true)}
            />
          </div>
        </div>
      </div>

      {messageList.map((item, index) => (
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div
              key={index}
              className={
                item.reply
                  ? "d-flex justify-content-end my-1" //if value is true then print at the end we are used ternary op
                  : "d-flex justify-content-start my-1" //if value is false then print at the end
              }
            >
              <div className="badge text-bg-secondary">
                {item.message}
                <span className="ms-4">
                  {new Date(item.messageTime).getHours()};
                  {new Date(item.messageTime).getMinutes()};
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
