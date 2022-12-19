//USER DEFINED TAGS==COMPONENT
function App() {
  let project = "Counter Application"; //local variables
  let btnvalue = "Click Mee";

  //JSX => HTML CSS
  //one simple button is created by using local/stateless variable
  return (
    <div>
      <h1>{project}</h1>
      <input type="button" value={btnvalue} />
    </div>
  );
}

export default App;
