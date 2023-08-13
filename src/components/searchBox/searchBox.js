import "./searchBox.css";

const searchBox = () => {
  return (
    <div className="box">
      <input className="input" placeholder="검색창" />
      <button className="add">+</button>
      <button className="delete">삭제</button>
    </div>  
  );
};

export default searchBox;
