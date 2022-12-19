//USER DEFINED TAGS==COMPONENT
function App() {
  let project = "My React Project"; //local variables
  let username = "Mahesh";

  //JSX => HTML CSS
  //by using tag we accessed the local varibles and returned
  return (
    <div>
      <h1>{project}</h1>
      <h1>{username}</h1>
    </div>
  );
}

export default App;
