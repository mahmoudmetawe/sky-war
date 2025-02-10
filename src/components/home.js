import { useState } from "react";
import Navlogin from "./navlogin";
import { Link } from "react-router-dom";

export default function Home() {
  const [cards, setcards] = useState([
    {
      name: "games",
      desc: "ana kdflkd;lfk adkljfs;ldj klsdjkljd;lks sdkljskld",
      Number: 1,
      button: 'click me',
    },
    {
      name: "PC",
      desc: "ana kdflkd;lfk adkljfs;ldj klsdjkljd;lks sdkljskld",
      Number: 100,
      button: 'click me',
    },
    {
      name: "Playstation",
      desc: "ana kdflkd;lfk adkljfs;ldj klsdjkljd;lks sdkljskld",
      Number: 240,
      button: "click me",
    },
    {
      name: "maintenance",
      desc: "ana kdflkd;lfk adkljfs;ldj klsdjkljd;lks sdkljskld",
      Number: 0,
      button: "click me",
    },
  ]);

  const cardMap = cards.map((card) => {
    return (
      <card className="card">
        <i class="fa-brands fa-product-hunt"
        style={{fontSize:"70px"}}
        ></i>
        <h1>{card.name}</h1>
        <p>{card.desc}</p>
        <p>Number of items : {card.Number}</p>
        <button>{card.button}</button>
      </card>
    );
  });
  return (
    <>
      <Navlogin />
      <div className="container-content">
        <div className="row1">
          <p style={{
            marginTop:"15%"
          }}>welcome to skywar website </p>
          <div>
            <button className="edituser">
              <Link to="/login">Log in</Link>
            </button>
            <button className="edituser">
              <Link to="/register">Register</Link>
            </button>
            <div>
              <Link
                to="/porto"
                style={{
                  textDecoration: "none",
                  fontSize: "30px",
                  color: "white",
                  position:"absolute",
                  right:"0",
                  bottom:"0"
                }}>
                click me<i class="fa-solid fa-right-from-bracket" 
                style={{color:"#55bed4", padding:"20px"}}></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-card">{cardMap}</div>
        <></>
      </div>
    </>
  );
}
