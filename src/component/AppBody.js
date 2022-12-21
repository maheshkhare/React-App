import { useState } from "react";

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

export default AppBody;
