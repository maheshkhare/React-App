import { useState } from "react";

function App() {
  let title = "Map Demo";
  //initialize list=empty list
  let [list, setList] = useState([]); //stateful variable

  //member function
  let addItem = () => {
    let textRef = document.querySelector("#textId1");

    let newList = [textRef.value, ...list];

    //dom part,set all updated data in list
    setList(newList);

    textRef.value = ""; //after adding value to the list do empty to the textbox
  };

  return (
    <div>
      <h1>{title}</h1>
      <input type="text" name="" id="textId1" />
      <input type="button" value="Add Item into List" onClick={addItem} />
      {/* after clicking on button call given to the function  */}

      {list.map((item) => (
        <h1>{item}</h1>
      ))}
      {/* printing one/one ele. from the */}
    </div>
  );
}

export default App;
