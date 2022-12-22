import { Link } from "react-router-dom";

function AppNavLinks() {
  return (
    <div>
      {/* provide links to each route path */}
      <Link to="/home" className="fs-4">
        Home |
      </Link>
      <Link to="/explore" className="fs-4">
        Explore |
      </Link>
      <Link to="/notification" className="fs-4">
        Notification |
      </Link>
    </div>
  );
}

export default AppNavLinks;
