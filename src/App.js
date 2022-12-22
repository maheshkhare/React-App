import { Link, Route, Routes } from "react-router-dom";
import AppNavLinks from "./component/AppNavLinks";
import Explore from "./component/Explore";
import Home from "./component/Home";
import Notification from "./component/Notification";
import PageNotFound from "./component/PageNotFound";

function App() {
  return (
    <div>
      <AppNavLinks />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
