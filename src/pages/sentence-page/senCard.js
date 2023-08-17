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
        // props.sentences.map((data, idx) => {
        //     console.log(data[1]);
        // })
        // console.log(sentences[0]);
    })
    // console.log(props.sentences);
  return (
    <div className="sencard">
         { sentences.map((data, idx) => (
          // <div className="sen-container" >
            <div className="sen-box" key={idx} onClick={()=>navigate("/sen-card", {state: data})}>
            <div className="sen-card">
            <div className="word">{data[1]}</div>
            <div className="mean">{data[2]}</div>
        </div>
        </div>
    // </div>
        ))}
    </div>
     
    
  );
};

export default SenCard;
