import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import on from "../../assets/on.png";
import off from "../../assets/off.png";
import volume from "../../assets/volume.png";
import "./detailCard.css";
import { speak } from "./speak";
import { useState,useEffect } from "react";

const DetailCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [bookmark, setBookmark] = useState(data.isBookmarked);
  const [wordCard, setWordCard] = useState(data);

  useEffect(() => {
    const readBtn = document.getElementById("readBtn");
    readBtn.addEventListener("click", handleReadClick);

    return () => {
      readBtn.removeEventListener("click", handleReadClick);
    };
  }, []); // 빈 배열을 넣어서 컴포넌트가 마운트될 때 한 번만 실행되도록 설정

  const handleReadClick = () => {
    speak(data.word, {
      rate: 0.5,
      pitch: 1.2,
      lang: "en-US",
    });
  };
  useEffect(() => {
    setWordCard((prevWordCard) => ({
      ...prevWordCard,
      isBookmarked: !bookmark,
    }));
    localStorage.setItem(wordCard.word, JSON.stringify(wordCard));
  }, [bookmark]);

  const handleBookmarkClick = () => {
    setBookmark(!bookmark);
    // localStorage.setItem(data.word, )
  }
  //카드 삭제 버튼
  const handleDeleteClick = () => {
    let result = window.confirm("카드를 삭제하시겠습니까?");
    if(result){
        localStorage.removeItem(wordCard.word);
        navigate("/");
        // DB 업데이트
    }
  }
  const handleUpdateClick = () => {
    navigate("/add-card", {state: wordCard});
  }
  return (
    <div>
      <Header navigate={navigate} />
      <div className="btn">
        <button className="update-btn" onClick={handleUpdateClick}>수정</button>
        <button className="delete-btn" onClick={handleDeleteClick}>삭제</button>
      </div>
      <div className="main-box">
        <div className="word-box">
          <img
            className="bookmark"
            src={bookmark ? on : off}
            onClick={handleBookmarkClick}
            alt="즐겨찾기"
          />
          <div className="words">
            <text className="word-text">{data.word}</text>
            <img id="readBtn" className="word-img" src={volume} alt="소리"/>
          </div>
          <div className="parts">{data.partsOfSpeech}</div>
          <div className="mean-box">
            <ul className="means">
              <li>{data.mean}</li>
              <li>기쁜</li>
            </ul>
          </div>
          <div className="memo">이곳은 메모칸입니다.</div>
        </div>
        <div className="sentence-box">
          <div className="sen-txt">예문 1</div>
          <div className="sen">{data.sentences[0].sentence}</div>
          <div className="trans">{data.sentences[0].translation}</div>

        </div>
      </div>
    </div>
  );
};

export default DetailCard;
