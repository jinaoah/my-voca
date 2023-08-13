import off from "../../assets/off.png";
import on from "../../assets/on.png";
import check from "../../assets/check.png";
import circle from "../../assets/circle.png";
import "./card.css";

const card = () => {
  return (
      <div className="card-container">
        <img className="bookmarkImg" src={off}/>
        <div>
          <div className="word">happy</div>
          <div className="mean">행복한</div>
        </div>
        <div className="checkBox">
          <div className="checkText">암기완료</div>
          <img className="checkImg" src={circle} />
        </div>
      </div>
  );
};

export default card;
