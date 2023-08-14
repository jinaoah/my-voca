import "./searchBox.css";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();

  const goToAddCard = () => {
    navigate("add-card");
  }
  return (
    <div className="box">
      <input className="input" placeholder="검색창" />
      <button className="add" onClick={goToAddCard}> +</button>
      <button className="delete">삭제</button>
    </div>  
  );
};

export default SearchBox;
