import React from "react";
import "./addcard.css";
import plus from "../../assets/plus.png";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AddCard = () => {
  const navigate = useNavigate();  
  const location = useLocation();
  const [method, setMethod] = useState(""); //데이터를 게시할건지, 업데이트할건지
  const [word, setWord] = useState("");
  const [mean, setMean] = useState("");
  const [partsOfSpeech, setPartsOfSpeech] = useState("null");
  const [sentenceData, setSentenceData] = useState([
    { sentence: "", translation: "" },
  ]);

  useEffect(() => {
    if (location.state) { //수정할 데이터가 있으면?
      let { word, mean, partsOfSpeech, sentences } = location.state;
      setWord(word);
      setMean(mean);
      setPartsOfSpeech(partsOfSpeech);
      setSentenceData(sentences);
      setMethod("update");
    } else { //새로운 카드를 작성한다면?
      setMethod("post");
    }
  }, []);

  const addSentence = () => {
    setSentenceData([...sentenceData, { sentence: "", translation: "" }]);
  };

  const handleSentenceChange = (index, key, value) => {
    const updatedSentenceData = [...sentenceData];
    updatedSentenceData[index][key] = value;
    setSentenceData(updatedSentenceData);
  };

  const handleAction = () => {
    const nickname = JSON.parse(sessionStorage.getItem("userData"))[2];
    const card = {
      word: word,
      mean: mean,
      partsOfSpeech: partsOfSpeech,
      sentences: sentenceData,
      isBookmarked: false,
      isChecked: false
    };
    localStorage.setItem(card.word, JSON.stringify(card));
    if (method === "post") {
      axios.post("http://localhost:1234/add-card", { card, nickname })
        .then((response) => {
          console.log('데이터 결과 : ', response.data);
          alert('성공적으로 저장이 되었습니다.');
        })
        .catch(error => {
          console.error('데이터 저장 에러: ', error);
          alert('데이터 저장에 실패했습니다.');
        });
    } else if (method === "update") {
      axios.put("http://localhost:1234/update-card", { card, nickname })
        .then(response => {
          console.log('카드 수정 완료 ->', response);
          alert('성공적으로 업데이트 되었습니다.');
        })
        .catch(error => {
          console.error('카드 업데이트 에러: ', error);
          alert('카드 업데이트에 실패했습니다.');
        });
    }

    navigate("/");
  };
  
  return (
    <div>
      <div className="head-container">
        <div className="cancel-btn" onClick={()=>navigate("/")}>취소</div>
        <div className="head-title">새 단어</div>
        <div className="add-btn" onClick={handleAction}>완료</div>
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
