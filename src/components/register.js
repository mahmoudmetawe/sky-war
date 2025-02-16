import axios from "axios";
import { useEffect, useState } from "react";
import "./signup.css";

export default function Form(props) {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordconfirm, setpasswordconfirm] = useState("");
  const [reload, setReload] = useState(false);
  const [emailError, setemailError] = useState("");
   

  useEffect( () => {
    setusername(props.username)
    setemail(props.email)
  } , [props.username , props.email])

  async function submit(event) {
    let flag = true;
    event.preventDefault();
    setReload(true);
    if (
      username.length < 1 ||
      password.length < 8 ||
      password !== passwordconfirm
    ) {
      flag = false;
    } else flag = true;
    try {
      if (flag === true) {
        let res = await axios.post(`http://127.0.0.1:8000/api/${props.endpoint}`, {
          name: username,
          email: email,
          password: password,
          password_confirmation: passwordconfirm,
        });
        if (res.status === 200) {
          props.haslocalstorage && window.localStorage.setItem("email", email);
          window.location.pathname = `${props.location}`;
        }
      }
    } catch (err) {
      setemailError(err.response.status);
    }
  }

  return (
    <div className="container">
      <form className="sign" onSubmit={submit}>
        <label htmlFor="1">User Name</label>
        <input
          type="text"
          id="1"
          placeholder="user name...."
          value={username}
          onChange={(event) => setusername(event.target.value)}
        />
        {username.length < 1 && reload && (
          <p className="error">username is requierd</p>
        )}

        <label htmlFor="2">Email</label>
        <input
          type="Email"
          id="2"
          placeholder="your Email...."
          value={email}
          onChange={(event) => setemail(event.target.value)}
        />
        {reload && emailError === 422 && (
          <p className="error">this email already been taken</p>
        )}

        <label htmlFor="3">Password</label>
        <input
          type="password"
          id="3"
          placeholder="enter your password...."
          value={password}
          onChange={(event) => setpassword(event.target.value)}
        />
        {password.length < 8 && reload && (
          <p className="error">most be 8 char</p>
        )}

        <label htmlFor="4">Confirm Password</label>
        <input
          type="password"
          id="4"
          placeholder="confirm yourpassword...."
          value={passwordconfirm}
          onChange={(event) => setpasswordconfirm(event.target.value)}
        />
        {password !== passwordconfirm && reload && (
          <p className="error">most be silmilar previous password</p>
        )}
        <button type="submit">{props.button}</button>
      </form>
    </div>
  );
}
