import { Link } from "react-router-dom"
import "./signup.css"
export default function Navbar() {
    function LogOut() {
        window.localStorage.removeItem('email');
        window.location.pathname = './'
    }
    return(
        <div className="nav-container">
            <div className="nav">
                <div >
                    <img src={require("../logo.png")} alt="logo"/>
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