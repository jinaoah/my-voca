import Tab from "../../components/tab/Tab";
import SearchBox from "../../components/searchBox/searchBox";
import "./home.css";
import Header from "../../components/header/Header";
import {useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header navigate={navigate}/>
      <SearchBox />
      <Tab />
      
    </div>
  );
};

export default Home;
