import "./App.css";

function App() {
  let mystyle = { color: "white", background: "purple" };
  return (
    <div>
      {/* This kind of External Styling */}
      <h1 className="beautify">Hello Again!</h1>

      {/* This kind of internal Styling NOTE:ONLY ONE CURLY BRACES */}
      <h1 style={mystyle}>Hello Mahi</h1>

      {/* THIS IS INLINE STYLING */}
      <h1 style={{ color: "white", backgroundColor: "red" }}>Hello</h1>
    </div>
  );
}

export default App;

//it that project we have seen 3 types of stylings
