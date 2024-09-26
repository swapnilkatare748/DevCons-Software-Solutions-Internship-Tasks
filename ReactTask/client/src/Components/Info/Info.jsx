import React from "react";
import { Link } from "react-router-dom";

const Info=()=>{
    return(
        <div>
            <h1>hellow from Info</h1>
            <button><Link to="/">Home</Link></button>
        </div>
    )
}

export default Info;