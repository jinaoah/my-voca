import React, { useCallback, useState, useEffect } from "react";
import Card from "../../components/card/Card";
import "./home.css";

const BookmarkTab = () => {
  const [wordCards, setWordCards] = useState([
    { word: "happy", mean: "행복한", isChecked: true, isBookmarked: true },
    { word: "apple", mean: "사과", isChecked: false, isBookmarked: true },
    // 다른 카드들도 추가할 수 있음
  ]);
  const [bookmarkedWordCards, setBookmarkedWordCards] = useState([]);

  useEffect(() => {
    setBookmarkedWordCards(wordCards.filter((wordCard) => wordCard.isBookmarked));
  }, [wordCards]);

  const handleWordCardChange = useCallback((index, updatedWordCard) => {
    const updatedCards = wordCards.map((card, idx) =>
      idx === index ? updatedWordCard : card
    );
    setWordCards(updatedCards);
  }, [wordCards]);
  

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
