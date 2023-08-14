import { useCallback, useState } from "react";
import Card from "../../components/card/Card";
import "./home.css";

const BookmarkTab = () => {
  const [wordCards, setWordCards] = useState([
    { word: "happy", mean: "행복한", isChecked: true, isBookmarked: true },
    { word: "apple", mean: "사과", isChecked: false, isBookmarked: true },
    // 다른 카드들도 추가할 수 있음
  ]);

  //Card(자식) 컴포넌트에서 값이 변경되었을 때 부모컴포넌트에서 호출하는 함수
  const handleWordCardChange = useCallback((index, updatedWordCard) => {
    const updatedCards = [...wordCards];
    updatedCards[index] = updatedWordCard;
    setWordCards(updatedCards);
  }, []);
  
  const bookmarkedWordCards = wordCards.filter(
    (wordCard) => wordCard.isBookmarked
  );
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
