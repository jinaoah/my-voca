import React from "react";
import "./addcard.css";
import plus from "../../assets/plus.png";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddCard = () => {
  const navigate = useNavigate();  
  const location = useLocation();
  
  const [word, setWord] = useState("");
  const [mean, setMean] = useState("");
  const [partsOfSpeech, setPartsOfSpeech] = useState("null");
  const [sentenceData, setSentenceData] = useState([
    { sentence: "", translation: "" },
  ]);
  
  useEffect(()=>{
    if(location.state){
      let {word, mean, partsOfSpeech, sentences} = location.state;
      setWord(word);
      setMean(mean);
      setPartsOfSpeech(partsOfSpeech);
      setSentenceData(sentences);
    }
  },[])
  

  const addSentence = () => {
    setSentenceData([...sentenceData, { sentence: "", translation: "" }]);
  };

  const handleSentenceChange = (index, key, value) => {
    const updatedSentenceData = [...sentenceData];
    updatedSentenceData[index][key] = value;
    setSentenceData(updatedSentenceData);
  };
  //새로운 카드 객체를 local에 저장하기
  const addCard = () => {
    if (word.trim() === "") {
      alert("단어를 입력해주세요.");
      return false;
    }
    const card = {
      word: word,
      mean: mean,
      partsOfSpeech: partsOfSpeech,
      sentences: sentenceData,
      isBookmarked: false,
      isChecked: false
    };
    // 로컬 스토리지에 저장하기
    localStorage.setItem(card.word, JSON.stringify(card));
    return true;
  }

  const handleAdd = () => {
    if(addCard()){
      alert('성공적으로 저장이 되었습니다.');
      navigate("/");
    }
  }
  return (
    <div>
      <div className="head-container">
        <div className="cancel-btn" onClick={()=>navigate("/")}>취소</div>
        <div className="head-title">새 단어</div>
        <div className="add-btn" onClick={handleAdd}>완료</div>
      </div>
      <div className="main">
        <div className="input-container">
          <div className="input-value">
            <div className="input-text">New Voca</div>
            <input 
              id="word" 
              className="input-value"
              value={word}
              onChange={(e)=>setWord(e.target.value)} />
          </div>
          <div className="input-value">
            <div className="input-text">의미</div>
            <input 
              id="mean" 
              className="input-value"
              value={mean}
              onChange={(e)=>{setMean(e.target.value)}} />
          </div>
          <div className="input-value">
            <div className="input-text">품사</div>
            <select 
              className="input-value" 
              id="partsOfSpeech"
              value={partsOfSpeech}
              onChange={(e)=>setPartsOfSpeech(e.target.value)}>
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
