import { useState } from "react";
import axios from "axios";
import "./signup.css";
export default function Login() {
  const[email , setemail]= useState('')
  const[password , setpassword] = useState('')
  const[reload , setReload]=useState(false)
  const[emailError , setemailError]=useState('')
  

  async function submit(event) {
    let flag = true; 
    event.preventDefault();
    setReload(true)
    if(password.length < 8){
        flag = false;
    }else flag= true;
    try{
      if(flag === true){
       let res = await axios.post("http://127.0.0.1:8000/api/login",{
         email:email,
         password:password
       })
       if (res.status === 200){
        window.localStorage.setItem("email" , email )
        window.location.pathname='./'
       }
     }
    }catch (err){
      setemailError(err.response.status);
    }
    
  }

  return (
    <div className="container">

      <form className="sign" onSubmit={submit}>
        

        <label htmlFor="2">Email</label>
        <input
          type="Email"
          id="2"
          placeholder="your Email...."
          value={email}
          onChange={(event) => setemail(event.target.value )}
        />
        {reload && emailError=== 422 &&<p className="error">email is wrong</p>}

        <label htmlFor="3">Password</label>
        <input
          type="password"
          id="3"
          placeholder="enter your password...."
          value={password}
          onChange={(event) => setpassword(event.target.value)}
        />
        {
           password.length < 8 && reload &&(<p className="error">most be 8 char</p>)
        }

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
