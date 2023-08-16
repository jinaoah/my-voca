import { useCallback, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import "./home.css";

const Alltab = ({navigate}) => {

  const allWordCards = Object.keys(localStorage).map(key => {
    return JSON.parse(localStorage.getItem(key));
  });
  const [wordCards, setWordCards] = useState([allWordCards]);

  const handleWordCardChange = useCallback((index, updatedWordCard) => {
    const updatedCards = [...wordCards];
    updatedCards[index] = updatedWordCard;
    setWordCards(updatedCards);
    localStorage.setItem(updatedWordCard.word, JSON.stringify(updatedWordCard));

    console.log('새로고침 ->',JSON.parse(localStorage.getItem(updatedWordCard.word)));
  }, []);

  return (
    <div className="card-box">
      {allWordCards.map((wordCard, idx) => {
        return (
          <Card
            wordCard={wordCard}
            key={idx}
            navigate={navigate}
            onWordCardChange={(updatedWordCard) =>
              handleWordCardChange(idx, updatedWordCard)
            }
          />
        );
      })}
    </div>
  );
};

export default Alltab;
