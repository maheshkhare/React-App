import { useState } from "react";

function App() {
  let [theme, setTheme] = useState("primary"); //data member

  // member Function's
  // this is boot strap properties
  let updateTheme = (p1 = "primary") => {
    theme = p1;

    // RE-RANDRING
    setTheme(theme);
  };

  return (
    <div>
      <div className="sticky-top">
        {/* after clicking on button theme will apply here */}
        <h1 className={`bg-${theme} text-light p-3`}>
          Bootstrap Styling {theme}
          {/* last theme will will provide the theme name infront of string */}
        </h1>

        <input
          type="button"
          value="primary Theme"
          className="btn btn-primary"
          // onClick = {updateTheme}
          onClick={() => updateTheme("primary")}
        />

        <input
          type="button"
          value="success Theme"
          className="btn btn-success"
          // onClick = {updateTheme}
          onClick={() => updateTheme("success")}
        />

        <input
          type="button"
          value="Danger Theme"
          className="btn btn-danger"
          // onClick = {updateTheme}
          onClick={() => updateTheme("danger")}
        />
      </div>
    </div>
  );
}

export default App;

// bootstrap styling
