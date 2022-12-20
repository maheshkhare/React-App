import { useState } from "react";

function App() {
  let [list] = useState(["pandharpur", "pune", "Solapur"]);

  return (
    <div>
      <h1>Map Demo</h1>

      {list.map((item) => (
        <div className="alert alert-primary">{item}</div>
      ))}
    </div>
    // by using map all ele from datamember featched and returned,return call given to the app.html
  );
}

export default App;
