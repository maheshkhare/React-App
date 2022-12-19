import { useState } from "react";

function App() {
  // useState, hooks, Stateful Variable
  // ES6 Syntax : De-Structureing
  // let counter = 100;
  let [counter, setCounter] = useState(100);

  // Member function,
  // ES6 Syntax: Arrow Function
  // React Binding + using Interpolation
  // How calling this function.
  let increment = () => {
    // logical opr
    counter++;

    // dom opr
    setCounter(counter);
  };

  return (
    <div>
      <h1>Counter Application</h1>
      <h1> {counter} </h1>
      <input type="button" value="Incrment" onClick={increment} />
    </div>
  );
}

export default App;
