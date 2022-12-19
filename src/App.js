function App() {
  let title = "Map Demo"; //varible
  let list = ["mumbai", "pune"]; //object

  return (
    <div>
      <h1>{title}</h1>
      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;

// [delhi, mumbai] => [<h1>delhi</h1>, <h1>mumbai</h1>]
//map fn creates a varibale item,inside it we have store the list,and by using item we have printing one/one
//element from the list
