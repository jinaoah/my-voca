import off from "../../assets/off.png";
import on from "../../assets/on.png";
import check from "../../assets/check.png";
import circle from "../../assets/circle.png";
import "./senCard.css";
import { useEffect, useState } from "react";

const SenCard = (props) => {
//   const { word, mean, isChecked, isBookmarked } = wordCard;
// const {sentence, translation} = sentences;
const sentences = props.sentences;
const navigate = props.navigate;

useEffect(()=> {
        console.log('상세 문장 : ', sentences);
    })
    // console.log(props.sentences);
  return (
    <div className="sencard">
         {sentences
  .filter((data, idx, self) => self.findIndex(d => d[0] === data[0] && d[1] === data[1]) === idx)
  .map((data, idx) => (
    <div className="sen-box" key={idx} onClick={() => navigate("/sen-card", { state: data })}>
      <div className="sen-card">
        <div className="word">{data[0]}</div>
        <div className="mean">{data[1]}</div> 
      </div>
    </div>
  ))}
    </div>
     
    
  );
};

export default SenCard;
