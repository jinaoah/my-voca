import React from "react";
import "./header.css";

const Header = () => {
    return(
        <div className="container">
            <h1>My Voca</h1>
            <div className="nav-box">
                <div className="nav-tab">단어</div>
                <div className="nav-tab">예문</div>
                <div className="nav-tab">마이페이지</div>
            </div>
        </div>
    );
}

export default Header;