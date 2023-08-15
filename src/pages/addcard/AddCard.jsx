import React from "react";
import "./addcard.css";
import plus from "../../assets/plus.png";
import { useEffect, useState } from "react";

const AddCard = () => {
  const [sentenceData, setSentenceData] = useState([
    { sentence: "", translation: "" },
  ]);

  const addSentence = () => {
    setSentenceData([...sentenceData, { sentence: "", translation: "" }]);
  };

  const handleSentenceChange = (index, key, value) => {
    const updatedSentenceData = [...sentenceData];
    updatedSentenceData[index][key] = value;
    setSentenceData(updatedSentenceData);
  };
  return (
    <div>
      <div className="head-container">
        <div className="cancel-btn">취소</div>
        <div className="head-title">새 단어</div>
        <div className="add-btn">완료</div>
      </div>
      <div className="main">
        <div className="input-container">
          <div className="input-value">
            <div className="input-text">New Voca</div>
            <input className="input-value" />
          </div>
          <div className="input-value">
            <div className="input-text">의미</div>
            <input className="input-value" />
          </div>
          <div className="input-value">
            <div className="input-text">품사</div>
            <select className="input-value" id="partsOfSpeech">
              <option value={"null"}>선택 안 함</option>
              <option value={"noun"}>명사</option>
              <option value={"verb"}>동사</option>
              <option value={"adj"}>형용사</option>
              <option value={"adv"}>부사</option>
              <option value={"prep"}>전치사</option>
              <option value={"conj"}>접속사</option>
            </select>
          </div>
          <div className="sentence">
            {sentenceData.map((sentence, idx) => (
              <div key={idx} className="sentence-list">
                <div className="input-text">예문 {idx+1}</div>
                <input className="input-value" 
                value={sentence.sentence}
                onChange={(e) => handleSentenceChange(idx, "sentence", e.target.value)}/>
                <div className="input-text">해석 {idx+1}</div>
                <input className="input-value"
                value={sentence.translation}
                onChange={(e) => handleSentenceChange(idx, "translation", e.target.value)}/>
              </div>
            ))}
          </div>
          <img src={plus} onClick={addSentence} alt="추가" />
        </div>
      </div>
    </div>
  );
};

export default AddCard;
