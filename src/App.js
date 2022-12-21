import { useState } from "react";

// Main fn
function App() {
  return (
    <div>
      <AppHeader />
      <AppBody />
      <AppBody />
      <AppFooter />
    </div>
  );
}

// <AppHeader />
function AppHeader() {
  return (
    <div className="bg-dark text-light p-3">
      <div className="fs-3">Shopping Book</div>
    </div>
    // some bootstrap Properties and name
  );
}

function AppBody() {
  // 8 list elements created
  let [list] = useState([{}, {}, {}, {}, {}, {}, {}, {}]);

  return (
    <div className="row">
      {list.map((item, index) => (
        //8 times below elements are print on the screen

        <div key={index} className="col-12 col-md-3 my-2">
          <div className="card">
            <img
              src={`http://picsum.photos/${250 + index}`}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-header">Card Title</div>
            <div className="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              eius sint facilis debitis suscipit distinctio dicta a, itaque ea
              dolor soluta aperiam quasi quaerat voluptatibus totam accusantium
              incidunt pariatur id!
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AppFooter() {
  return (
    <div
      className="bg-secondary d-flex flex-column justify-content-center align-items-center"
      style={{ height: "400px" }}
    >
      <div className="text-light fs-4">Copy Right by Student Community!</div>
      <div className="text-light fs-6">Follow Us @Twitter</div>
      <div className="text-light fs-6"> Follow Us @Youtube</div>
    </div>
  );
}
export default App;
