import { useState } from "react";

function App() {
  let title = "Map Demo";
  //initialize list=empty list
  let [list, setList] = useState([]); //stateful variable

  //member function
  let addItem = () => {
    //logical part,cloning the list item and adding one insiide newList
    let newList = [...list, "Pandharpur"];

    //dom part,set all updated data in list
    setList(newList);
  };

  return (
    <div>
      <h1>{title}</h1>
      <input type="button" value="Add Item into List" onClick={addItem} />
      {/* after clicking on button call given to the function  */}

      {list.map((item) => (
        <h1>{item}</h1>
      ))}
      {/* printing one/one ele. from the list */}
    </div>
  );
}

export default App;
