import Header from "../../components/header/Header";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
});
const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) =>{
    event.preventDefault();
  axios.post("http://localhost:1234/login", formData)
  .then((response) => {
    if(response.data.rows.length == 0){
        alert('아이디와 비밀번호가 올바르지 않습니다.');
    } else {
        console.log("Login successful:", response.data.rows[0][2]);
        alert('로그인이 완료되었습니다.');
        sessionStorage.setItem("userData", JSON.stringify(response.data.rows[0]));
        navigate("/")
    }
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
            <div className="login">로그인</div>
            <div className="join" onClick={()=>{navigate("/join")}}>회원가입</div>
        </div>
        <form id="loginData" onSubmit={handleSubmit}>
          <div>이메일</div>
          <input type="text" name="email" className="email" 
            value={formData.email}
            onChange={handleChange}/>
          <div>비밀번호</div>
          <input type="text" name="password" 
            value={formData.password}
            onChange={handleChange}
          className="pw"/>
          <input className="login-btn" type="submit" value="로그인"/>
        </form>
      </div>
    </div>
  );
};

export default Login;
