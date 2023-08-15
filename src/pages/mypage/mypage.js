import Header from "../../components/header/Header";
import {useNavigate, useLocation} from "react-router-dom";
import profile from "../../assets/profile.png";
import "./mypage.css";

const Mypage = () => {
    const navigate = useNavigate();
    return(
        <div>
            <Header navigate={navigate}/>
            <div className="main">
                <div className="profile-container">
                    <img src={profile} alt="프로필"/>
                    <div className="profile-info">
                        <div className="name">하진 님</div>
                        <div className="email">asdf@gmail.com</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Mypage;