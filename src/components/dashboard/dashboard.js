import Sidebar from "../dashboard/sidebar";
import '../dashboard/dashboard.css'
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

export default function Dashboard() {
    return (
      <>
      <Navbar/>
        <div className="dashboard">
          <Sidebar />
          <Outlet />
        </div>
      </>
    );
}