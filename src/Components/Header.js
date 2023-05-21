import React from "react";
import "./Header.css";

function Header (props){
    return (
        <div className="hero text-center" style={{backgroundImage: `url(${props.backgroundImage})`}}>
            <a href="/"><img id="logo" src="/images/club-hq-logo.jpg" alt="Club HQ Logo"></img></a>

            <div><strong>Supporting Hindquarter Amputees</strong></div>
        </div>
    );
}

export default Header;