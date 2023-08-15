import off from "../../assets/off.png";
import on from "../../assets/on.png";
import check from "../../assets/check.png";
import circle from "../../assets/circle.png";
import "./card.css";
import { useState } from "react";

const Card = ({wordCard, onWordCardChange}) => {
  const { word, mean, isChecked, isBookmarked } = wordCard;

  const [checked, setChecked] = useState(isChecked); //암기완료
  const [bookmark, setBookmark] = useState(isBookmarked); //즐겨찾기

  const handleChange = (button) => {
    let updatedWordCard;
    if(button === "check"){
      setChecked(checked => !checked);
      updatedWordCard = {...wordCard, isChecked: !checked};
    } else {
      setBookmark(!bookmark);
      updatedWordCard = {...wordCard, isBookmarked: !bookmark};
    }
    onWordCardChange(updatedWordCard);
  };
  //값 변경 테스트
  // useEffect(()=>{
  //   console.log('암기완료 했는가? ->', checked)
  //   // console.log('즐겨찾기 했는가? ->', bookmark);
  // }, [checked])
  return (
    <div className="card-container">
      <img className="bookmarkImg" 
          src={bookmark ? on : off} 
          alt="즐겨찾기"
          onClick={()=>{handleChange("bookmark")}}/>
      <div>
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
