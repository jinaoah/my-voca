import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import on from "../../assets/on.png";
import off from "../../assets/off.png";
import volume from "../../assets/volume.png";
import "./detailCard.css";
import { useState } from "react";

const DetailCard = () => {
    const navigate = useNavigate();
    const [bookmark, setBookmark] = useState(false);
    return(
        <div>
            <Header navigate={navigate}/>
            <div className="btn">
                <button className="update-btn">수정</button>
                <button className="delete-btn">삭제</button>
            </div>
            <div className="word-box">
                    <img 
                        className="bookmark" 
                        src={bookmark ? on : off}
                        onClick={()=>setBookmark(!bookmark)} />
                <div>
                    <text className="word-text">happy</text>
                    <img className="word-img" src={volume}/>
                </div>
            </div>
        </div>
    )
}

export default DetailCard;