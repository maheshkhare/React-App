//Statefull variable
//we import useState function from react library
import { useState } from "react";

function App() {
  //initialized counter value=10
  let [counter, setCounter] = useState(10);

  //Arrow of function
  let increment = () => {
    counter = counter + 1;

    //RE-RENDER,means set the updated value of counter by using setCounter
    setCounter(counter);
  };

  return (
    <div>
      <h1>Counter Application</h1>
      <h1>{counter}</h1>

      <input type="button" value="Increment" onClick={increment} />
    </div>
  );
}

export default App;

//in this function we incremented value by using varibale value but this variable is statefull beacuse of
//by using this varibale we can update value on web window
