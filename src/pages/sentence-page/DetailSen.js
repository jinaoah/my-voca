import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import on from "../../assets/on.png";
import off from "../../assets/off.png";
import "./detailSen.css";
import { useState, useEffect } from "react";
import axios from "axios";

const DetailSen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state;
  const [bookmark, setBookmark] = useState(true);
  const [words, setWords] = useState([]);
  const retrievedData = [];

  useEffect(() => {
    console.log('데이터 : ', data[2])
    axios
      .get(`http://localhost:1234/sentences/detail/${data[2]}`)
      .then((response) => {
        const keyArr = response.data;
        keyArr.forEach((key) => {
          const valueString = localStorage.getItem(key);
          if (valueString) {
            const valueObject = JSON.parse(valueString);
            retrievedData.push(valueObject);
          }
        });
        setWords(retrievedData);
      })
      .catch((err) => { console.log(err) });
  }, []);
  return (
    <div>
      <Header navigate={navigate} />

      <div className="main-box">
        <div className="word-box">
          <img className="bookmark" src={bookmark ? on : off} alt="즐겨찾기" />
          <div>
            {words.map((data, index) => (
            <div key={index}>
                <div className="words">
                  <text className="word-text">{data.word}</text>
                </div>
                <div className="parts">{data.partsOfSpeech}</div>
                <div className="mean-box">
                  <ul className="means">
                    <li>{data.mean}</li>
                  </ul>
                </div>
                <div className="memo">이곳은 메모칸입니다.</div>
              </div>
            ))}
          </div>
        </div>
        <div className="sentencesss">
          <div className="sentence-box">
            <div className="sen-txt">예문</div>
            <div className="sen">{data[0]}</div>
            <div className="trans">{data[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSen;
