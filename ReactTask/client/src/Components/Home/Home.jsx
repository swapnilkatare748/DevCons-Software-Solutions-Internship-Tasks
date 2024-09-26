import React from "react";
import { Link } from "react-router-dom";
import Info from "../Info/Info";
const Home=()=>{
    return(
       <div>
         <h1>hellow Home </h1>
           <button> <Link to="/Info">INFO</Link></button>
           <br />
           <br />
           <button> <Link to="/About"> About</Link>  </button>
       </div>
    )
}

export default Home;