import Tab from "../../components/tab/Tab";
import SearchBox from "../../components/searchBox/searchBox";
import "./home.css";
import Header from "../../components/header/Header";
import {useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Check if data exists in session storage
    const userData = sessionStorage.getItem("userData");
    if (!userData) {
      // Navigate to the login page
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Header navigate={navigate}/>
      <SearchBox />
      <Tab navigate={navigate}/>
    </div>
  );
};

export default Home;
