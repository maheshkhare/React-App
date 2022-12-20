import { useState } from "react";

function App() {
  // initialized default theme = primary
  let [theme, setTheme] = useState("primary"); //data member

  // member Function's
  let makePrimaryTheme = () => {
    // this is bootstrap properties
    theme = "primary";

    // RE-RANDRING
    setTheme(theme);
  };

  let makeSuccessTheme = () => {
    theme = "success";

    // RE-RANDRING
    setTheme(theme);
  };

  let makeDangerTheme = () => {
    theme = "danger";

    // RE-RANDRING
    setTheme(theme);
  };

  return (
    <div>
      {/* after clicking on button result set in below this datamemer and it is applied on string */}
      {/* by-default theme we have declared as primary */}
      <h1 className={`bg-${theme} text-light p-3`}>Bootstrap Styling</h1>

      <input
        type="button"
        value="primary Theme"
        className="btn btn-primary"
        onClick={makePrimaryTheme}
      />

      <input
        type="button"
        value="success Theme"
        className="btn btn-success"
        onClick={makeSuccessTheme}
      />

      <input
        type="button"
        value="Danger Theme"
        className="btn btn-danger"
        onClick={makeDangerTheme}
      />
    </div>
  );
}

export default App;

// bootstrap styling
