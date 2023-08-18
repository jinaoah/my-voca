import Header from "../../components/header/Header";
import { useNavigate, useLocation } from "react-router-dom";
import profile from "../../assets/profile.png";
import "./mypage.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Mypage = () => {
  const navigate = useNavigate();

  const name = JSON.parse(sessionStorage.getItem("userData"))[2];
  const email = JSON.parse(sessionStorage.getItem("userData"))[0];

  const [totalCnt, setTotalCnt] = useState(0);
  const [todayCnt, setTodayCnt] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:1234/mypage/${name}`)
      .then((response) => {
        // console.log(response.data);
        setTotalCnt(response.data[0]);
        setTodayCnt(response.data[1]);
      })
      .catch((err) => {
        console.log("마이페이지 에러 ->", err);
      });
  }, []);
  return (
    <div>
      <Header navigate={navigate} />
      <div className="main">
        <div className="profile-container">
          <img src={profile} alt="프로필" />
          <div className="profile-info">
            <div className="name">{name} 님</div>
            <div className="email">{email}</div>
          </div>
        </div>
        <div className="profile-container">
          <div className="cnt-info">
            <div className="cnt">
              <div className="totalCnt">그동안 메모한 단어</div>
              <div className="totalCnt">{totalCnt}개</div>
            </div>
            <div className="cnt">
              <div className="totalCnt">오늘 하루동안 메모한 단어</div>
              <div className="totalCnt">{todayCnt}개</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
