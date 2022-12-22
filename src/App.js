import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/** http://localhost:3000/ */}
      <Route path="/" element={<h1>Home</h1>} />

      {/** http://localhost:3000/home */}
      <Route path="/home" element={<h1>Home</h1>} />

      {/** http://localhost:3000/explore */}
      <Route path="/explore" element={<h1>Explore</h1>} />

      {/** http://localhost:3000/notification */}
      <Route path="/notification" element={<h1>Notification</h1>} />

      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
