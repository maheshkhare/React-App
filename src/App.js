//Stateless variable
function App() {
  let counter = 100;

  //Arrow of function
  let increment = () => {
    counter = counter + 1;
    console.log(counter);
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

//in this function we incremented value by using varibale value but this variable is stateless beacuse of
//by using this varibale we cant update value on web window,we update value only in console window(inspect)
