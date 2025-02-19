import { useState,useEffect } from "react";
import "../signup.css";
import Form from "../register";


export default function UserUpdate() {
  const[username , setusername]=useState('')
  const[email , setemail]= useState('')
  const server = "http://127.0.0.1:8000/api"
  const ID = window.location.pathname.split("/").slice(-1)[0];

  useEffect(() => {
    fetch(`${server}/user/showbyid/${ID}`)
      .then((Response) => Response.json())
      .then((data) => {
        setusername(data[0].name);
        setemail(data[0].email)
      })
  });

  return (

    <div className="dashboard-content updateuser">
      <Form button="Update" username={username} email={email} endpoint= {`user/update/${ID}`}  location = {`./dashboard/users`} haslocalstorage = {false}/>
    </div>
    
  );
}
