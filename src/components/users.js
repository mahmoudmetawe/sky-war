import "../all.min.css"
import '../all.css'
import "./dashboard.css"
import {useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";


export default function Users() {
const [datauser , setdatauser]=useState([])
const [refreshuser , setrefreshUser] = useState([])
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
    .then(Response => Response.json())
    .then(data => setdatauser(data))
  },[refreshuser])
  
  async function deleteUser(id) {
    try {
      let userdel = await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
      if(userdel.status === 200){
        setrefreshUser((prev) => prev+1);
      }
    } catch {
      console.log("the user is not deleted");
    }
  }

  const showUser = datauser.map((user , indx) => {
     return (
       <tr key={indx}>
         <td>{indx + 1}</td>
         <td>{user.name}</td>
         <td>{user.email}</td>
         <td>
           {/* update user button .............................. */}
           <Link to={`${user.id}`}>
           <i
               class="fa-solid fa-user-pen"
               style={{
                 color: "teal",
                 marginRight: "15px",
                 cursor: "pointer",
               }}></i>
           </Link>
             
           {/* delete user button .............................  */}
           <i
             class="fa-solid fa-trash"
             style={{ color: "red", marginRight: "15px", cursor: "pointer" }}
             onClick={() => deleteUser(user.id)}></i>
         </td>
       </tr>
     );
  })
  
  return (
      <div className="table">
        <table>
          <tr>
            <th>id</th>
            <th>user name</th>
            <th>email</th>
            <th>action</th>
          </tr>
          {showUser}
        </table>
      </div>

  );
}
