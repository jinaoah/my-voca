import React from "react";
import "./header.css";
import {useLocation} from "react-router-dom";

const Header = ({navigate}) => {
    const location = useLocation();
    return(
        <div className="container">
            <h1 onClick={()=>navigate("/")}>My Voca</h1>
            <div className="nav-box">
                <div className={`nav-tab ${location.pathname === "/"?"active":""}`} onClick={()=>{navigate("/")}}>단어</div>
                <div className={`nav-tab ${location.pathname === "/sentence"?"active":""}`} onClick={()=>{navigate("/sentence")}}>예문</div>
                <div className={`nav-tab ${location.pathname === "/mypage"?"active":""}`} onClick={()=>{navigate("/mypage")}}>마이페이지</div>
            </div>
        </div>
    );
}

export default Header;