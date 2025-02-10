import { Link } from "react-router-dom"
import "./signup.css"
export default function Navbar() {
    function LogOut() {
        window.localStorage.removeItem('email');
        window.location.pathname = './home.js'
    }
    return(
        <div className="nav-container">
            <div className="nav">
                <div style={{widows:"20%"}} >
                    <img src={require("../logo.png")} alt="logo"/>
                </div>
                <div className="link">
                <Link to="/" >Home</Link>
                <Link to="/Porto" >Portofolio</Link>
                <Link to="/install" >installation</Link>
                <Link to="/support" >support</Link>
                <Link to="/callus" >call us</Link>
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