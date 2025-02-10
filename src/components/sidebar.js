import { Link } from "react-router-dom";
import "./dashboard.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <i class="fa-solid fa-user"></i>
        <Link to="/dashboard/users"> Users</Link>
      </div>
      <div>
        <i class="fa-solid fa-chart-simple"></i>
        <Link to="">statistics</Link>
      </div>
      <div>
        <i class="fa-solid fa-coins"></i>
        <Link to="">Finances</Link>
      </div>
      <div>
        <i class="fa-solid fa-gear"></i>
        <Link to="">Settings</Link>
      </div>
      <div>
        <i class="fa-solid fa-right-from-bracket"></i>
        <Link to="">Sign out</Link>
      </div>
    </div>
  );
}
