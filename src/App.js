import { useState } from "react";

function App() {
  // set default message as =ABC
  let [message, setMessage] = useState("Abc"); //datamember

  // member fn
  let updateMessage = (e) => {
    // e.target == document.querySelector("input")
    //first state is equal to second statement[querySelector]
    message = e.target.value;
    setMessage(message);
  };

  return (
    <div>
      <h1>Working With Live Input</h1>

      <input
        type="text"
        placeholder="Enter Your Text"
        value={message} //this line only shows default value on textbox==ABC
        onChange={updateMessage} //when we type on textbox,then fn call given and all changes saved in msg
      />

      <h1>{message}</h1>
      {/* and this show over here */}
    </div>
  );
}

export default App;
