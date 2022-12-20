import { useState } from "react";

function App() {
  // we have stored 9 elements in list
  let [list] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);
  // initialized default theme = primary,stateful variable
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

      {list.map((item) => (
        //after clicking on button theme will be apply here,and this will iterate 9 times
        <div className={`alert alert-${theme} my-1`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A eius,
          voluptas quo, iusto id commodi optio sed perspiciatis natus minima
          incidunt reprehenderit quos ratione tempora atque vero aspernatur
          itaque dicta!
        </div>
      ))}
    </div>
  );
}

export default App;

// bootstrap styling
