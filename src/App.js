//Statefull variable
//we import useState function from react library
import { useState } from "react";

function App() {
  let str1 = "Home";
  let str2 = "Explore";
  let str3 = "Notifications";
  //let set[initilize] the counter value=1
  let [counter, setCounter] = useState(1);
  //initilize city=mulbai
  let [city, SetCity] = useState("mumbai");

  //Arrow of function
  let increment = () => {
    // giving logic
    counter++;

    //DOM UPDATE PART >>RE_RANDRERING
    setCounter(counter);
  };

  //Arrow of function
  let changeCity = () => {
    city = "Hello " + city;

    //re-rendering the value of city
    SetCity(city);
  };

  return (
    <div>
      <h1>{city}</h1>
      <input type="button" value="Change City" onClick={changeCity} />
      <hr />
      <h1>{str1}</h1>
      <h1>{str2}</h1>
      <h1>{str3}</h1>
      <h1>{counter}</h1>
      <input type="button" value="Increment" onClick={increment} />
    </div>
  );
}

export default App;

//by using the stateful[useState] variable we can change the values of variables
//like in twiter,facebbok,whatsapp there is some stable and some unstable options are there
//
