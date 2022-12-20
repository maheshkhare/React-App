import { useState } from "react";

function App() {
  // statefull varible
  let [list, setList] = useState([
    //datamembers
    { message: "Hii mahi", messageTime: new Date() },
    { message: "How r You", messageTime: new Date() },
    { message: "I'm doing labwork", messageTime: new Date() },
    { message: "How's project going on", messageTime: new Date() },
  ]);

  // member fn
  let addMessage = () => {
    let newMessage = {
      message: "Chill Santosh Sir..!",
      messageTime: new Date(),
    };
    list = [newMessage, ...list];
    // save in list new msg+clone privious messages

    setList(list);
  };

  return (
    <div>
      <h1 className="bg-primary text-white p-3">Messaging App</h1>

      <input
        type="button"
        value="Add Message"
        className="btn btn-primary"
        onClick={addMessage}
        // when we click button then hardcoded message added on web
      />

      {list.map((item, index) => (
        // index not use here
        <div key={index} className="d-flex my-1">
          <div className="badge text-bg-primary">
            {item.message}
            <span className="ms-4">
              {/* margine ms-3 for time */}
              {item.messageTime.getHours()}:{item.messageTime.getMinutes()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
// take one/one datamembers and print by using map
export default App;
