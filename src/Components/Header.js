import React from "react";
import "./Header.css";

function Header (props){
    return (
        <div className="hero text-center" style = {{backgroundImage: `url(${props.backgroundImage})`}}>

        </div>
    );
}

export default Header;