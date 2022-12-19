function App() {
  //local data memebers
  let project = "Counter Application";
  let btnvalue = "Click Mee";

  //Member Function :: Types of functions
  //arrow of function
  let clickMe = () => alert();
  let increment = () => {};
  let decrement = () => {};

  //JSX
  return (
    <div>
      <h1>{project}</h1>
      <h1></h1>
      <input type="button" value={btnvalue} onClick={clickMe} />
      <input type="button" value="Increment" onClick={increment} />
    </div>
  );
}

//we have created one alert message by using datamember and member functions

export default App;
