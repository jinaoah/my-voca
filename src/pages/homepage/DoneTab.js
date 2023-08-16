import React, { useCallback, useState, useEffect } from "react";
import Card from "../../components/card/Card";
import "./home.css";

const DoneTab = () => {
  const [wordCards, setWordCards] = useState([]);
  
  const allWordCards = Object.keys(localStorage).map(key => {
    return JSON.parse(localStorage.getItem(key));
  });

  useEffect(()=>{
    setWordCards(allWordCards);
  },[])

  const handleWordCardChange = useCallback((index, updatedWordCard) => {
    const updatedCards = [...wordCards];
    updatedCards[index] = updatedWordCard;
    setWordCards(updatedCards);
    localStorage.setItem(updatedWordCard.word, JSON.stringify(updatedWordCard));

    console.log('새로고침 ->',JSON.parse(localStorage.getItem(updatedWordCard.word)));
  }, []);
  
  const DoneWordCards = wordCards.filter(wordCard => wordCard.isChecked);

  return (
    <div className="card-box">
      {DoneWordCards.map((wordCard, idx) => {
        return (
          <Card
            wordCard={wordCard}
            key={idx}
            onWordCardChange={(updatedWordCard) =>
              handleWordCardChange(idx, updatedWordCard)
            }
          />
        );
      })}
    </div>
  );
};

export default DoneTab;
