import { useState } from "react";

function App() {
  let [list] = useState([
    //datamembers
    { message: "Hii mahi", messageTime: new Date() },
    { message: "How r You", messageTime: new Date() },
    { message: "I'm doing labwork", messageTime: new Date() },
    { message: "How's project going on", messageTime: new Date() },
  ]);

  return (
    <div>
      <h1 className="bg-primary text-white p-3">Messaging App</h1>

      {list.map((item, index) => (
        // index not use here
        <div key={index} className="d-flex my-1">
          <div className="badge text-bg-primary">
            {item.message}
            <span className="ms-3">
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
