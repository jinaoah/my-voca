import React, { useCallback, useState, useEffect } from "react";
import Card from "../../components/card/Card";
import "./home.css";

const BookmarkTab = () => {
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
  
  const bookmarkedWordCards = wordCards.filter(wordCard => wordCard.isBookmarked)

  return (
    <div className="card-box">
      {bookmarkedWordCards.map((wordCard, idx) => {
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

export default BookmarkTab;
