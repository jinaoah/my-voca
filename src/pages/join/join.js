import Header from "../../components/header/Header";
import "./join.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Join = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
      email: "",
      password: "",
      nickname: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) =>{
        // event.preventDefault();
      axios.post("http://localhost:1234/join", formData)
      .then((response) => {
        console.log("Signup successful:", response.data);
        alert('회원가입이 완료되었습니다.');
        navigate("/login");
        // 이후에 회원가입 성공 처리를 할 수 있습니다.
      })
      .catch((error) => {
        console.error("Signup failed:", error);
        // 이후에 회원가입 실패 처리를 할 수 있습니다.
      });
    }
  return (
    <div>
      <Header navigate={navigate} />
      <div className="login-box">
        <div className="tab">
            <div className="login" onClick={()=> navigate("/login")}>로그인</div>
            <div className="join">회원가입</div>
        </div>
        <form id="loginData" >
          <div>이메일</div>
          <input 
            type="text" 
            name="email" 
            className="email"
            value={formData.email}
            onChange={handleChange} />
          <div>비밀번호</div>
          <input 
            type="text" 
            name="password" 
            className="pw"
            value={formData.password}
            onChange={handleChange}/>
          <div>닉네임</div>
          <input 
            type="text" 
            name="nickname" 
            className="nickname"
            value={formData.nickname}
            onChange={handleChange}/>
          <input onClick={handleSubmit} className="join-btn" type="button" value="회원가입" />
        </form>
      </div>
    </div>
  );
};

export default Join;
