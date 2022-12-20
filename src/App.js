import { useState } from "react";

function App() {
  let [message, setMessage] = useState(""); //firstly new typed msg stored here then it is given to the add msg fn
  let [list, setList] = useState([]); //privious and newly coming msg stored here

  // Member fn
  let updateInputMessage = (e) => {
    message = e.target.value;
    setMessage(message); //ontyping time add text is message list
  };

  let addMessage = () => {
    let newMessage = { message: message, messageTime: new Date() }; //take message from msg list
    list = [newMessage, ...list]; //add new msg and privious msgs in list
    setList(list);
  };

  return (
    <div>
      <h1 className="bg-primary text-white p-3">Messaging Demo</h1>

      <div className="d-flex">
        <input
          className="form-control"
          value={message}
          id="textId1"
          onChange={updateInputMessage} //live typing time call given
          type="text"
          placeholder="Enter Message"
        />
        <input
          className="btn btn-primary"
          type="button"
          value="Add Message"
          onClick={addMessage} //after clicking button
        />
      </div>

      {/* take one/one messages from list and print on web page */}

      {list.map((item, index) => (
        <div key={index} className="d-flex my-1">
          <div className="badge text-bg-primary">
            {item.message}
            <span className="ms-4">
              {item.messageTime.getHours()}:{item.messageTime.getMinutes()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
