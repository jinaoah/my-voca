import off from "../../assets/off.png";
import on from "../../assets/on.png";
import check from "../../assets/check.png";
import circle from "../../assets/circle.png";
import "./card.css";
import { useState } from "react";

const Card = ({idx, wordCard, onWordCardChange, navigate}) => {
  const { word, mean, isChecked, isBookmarked } = wordCard;

  const [checked, setChecked] = useState(isChecked); //암기완료
  const [bookmark, setBookmark] = useState(isBookmarked); //즐겨찾기

  let updatedWordCard;
  const handleChange = (button) => {
    if(button === "check"){
      setChecked(checked => !checked);
      updatedWordCard = {...wordCard, isChecked: !isChecked};
    } else if(button === "bookmark"){
      setBookmark(!bookmark);
      updatedWordCard = {...wordCard, isBookmarked: !isBookmarked};
    }
    // console.log(updatedWordCard);
    onWordCardChange(updatedWordCard);
  };
 
  return (
    <div className="card-container" >
      <img className="bookmarkImg" 
          src={bookmark ? on : off} 
          alt="즐겨찾기"
          onClick={()=>{handleChange("bookmark")}}/>
      <div onClick={()=>navigate("/word-card", {state: wordCard})}>
        <div className="word">{word}</div>
        <div className="mean">{mean}</div>
      </div>
      <div className="checkBox">
        <div className="checkText">DONE</div>
        <img className="checkImg" 
            src={checked ? check : circle} 
            onClick={()=>{handleChange("check")}}
            alt="체크"/>
      </div>
    </div>
  );
};

export default Card;
