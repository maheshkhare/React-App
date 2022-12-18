//multiline tags
//since every function is a tag,thats why we are calling by using tag
function App() {
  return (
    <div>
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
    </div>
  );
}

// <Person />
function Person() {
  return (
    <div>
      <img src="https://picsum.photos/400" alt="" />
      <h1>Person Name </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        delectus placeat? Consequuntur iusto perferendis voluptatibus, ipsa sit
        non. Quo cumque veniam nostrum voluptatem qui accusantium ipsa labore
        libero! Tempore, consequuntur!
      </p>
    </div>
  );
}

export default App;
