function App() {
  // no argument function
  let clickMe1 = () => {
    console.log("Hello"); //print hello every time
  };

  // argument function, e is a parameter
  let clickMe2 = (e) => {
    console.log(e); //it print one default parameter
  };

  // custom parameter :: using arrow fn
  let clickMe3 = (p1) => {
    console.log(p1); //print passed param like primary or danger
  };

  // multiple argument[parameter] function
  let clickMe4 = (e, p1) => {
    console.log(e, p1);
  };

  return (
    <div>
      <h1>Btn Click Demo</h1>

      {/* Default no parameter call */}
      <input type="button" value="Click Me 1" onClick={clickMe1} />

      {/* Default event param call,means not given but received there */}
      <input type="button" value="Click Me 2" onClick={clickMe2} />

      {/* Custom param call */}
      <input
        type="button"
        value="Click Me 3"
        onClick={() => clickMe3("primary")} //some default value passed
      />
      <input
        type="button"
        value="Click Me 3"
        onClick={() => clickMe3("danger")} //some default value passed
      />

      {/* Event + custom parameter call */}
      <input
        type="button"
        value="Click Me 4"
        onClick={(e) => clickMe4(e, "ABCDiefwodhh8rgloijewgrEFGH")}
      />
    </div>
  );
}

export default App;
