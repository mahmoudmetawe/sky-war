import { Link, NavLink } from "react-router-dom";
import "./dashboard.css";

export default function Sidebar() {
  return (
    < div className="sidebar">
        
        <NavLink to="/dashboard/users" activeClassName="active"> 
        <i class="fa-solid fa-users"></i>
        Users</NavLink>

        
        <NavLink to="/dashboard/adduser" activeClassName="active">
        <i class="fa-solid fa-user-plus"></i>
        add User</NavLink>


        
        <Link to="" activeClassName="active">
        <i class="fa-solid fa-coins"></i>
        Finances</Link>
     

        
        <Link to="" activeClassName="active"> 
        <i class="fa-solid fa-gear"></i>
        Settings</Link>
     

        
        <Link to="./" activeClassName="active">
        <i class="fa-solid fa-right-from-bracket"></i>
        Sign out</Link>
     
    </div>
  );
}
