import "./signup.css";
import Navlogin from "./navlogin"
import Form from "./register";


export default function SignUp() {
  

  return (

    <section>
    <Navlogin/>
    <Form button = "Register"  username=""   email="" endpoint ="register" location = "./"/> 
    </section>
    
  );
}
