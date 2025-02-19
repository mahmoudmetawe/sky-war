import { Link, NavLink } from "react-router-dom"
import "./signup.css"
export default function Navbar() {
    function LogOut() {
        window.localStorage.removeItem('email');
        window.location.pathname = './'
    }
    return(
        <div className="nav-container">
            <div className="nav">
                <div style={{widows:"20%"}} >
                    <img src={require("../logo.png")} alt="logo"/>
                </div>
                <div className="link">
                <NavLink activeClassName = "acive" to="/" >Home</NavLink>
                <NavLink activeClassName = "acive" to="/Porto" >Portofolio</NavLink>
                <NavLink activeClassName = "acive" to="/install" >installation</NavLink>
                <NavLink activeClassName = "acive" to="/support" >support</NavLink>
                <NavLink activeClassName = "acive" to="/callus" >call us</NavLink>
                </div>
                
                {!window.localStorage.getItem('email') ? <div>
                <button><Link to="/login" className="reg">Log in</Link></button>/
                <button><Link to="/register" className="reg">Register</Link></button>
                </div> : 

                <div><button className="reg" onClick={LogOut}>log out</button></div>}
            </div>
        </div>
    )
}