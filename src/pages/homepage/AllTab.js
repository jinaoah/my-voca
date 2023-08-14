import { useCallback, useState } from "react";
import Card from "../../components/card/Card";
import "./home.css";

const Alltab = () => {
    const [wordCards, setWordCards] = useState([
        { word: "happy", mean: "행복한", isChecked: true, isBookmarked: true },
        { word: "apple", mean: "사과", isChecked: false, isBookmarked: true },
        // 다른 카드들도 추가할 수 있음
      ]);
      
      const handleWordCardChange = useCallback((index, updatedWordCard) => {
        const updatedCards = [...wordCards];
        updatedCards[index] = updatedWordCard;
        setWordCards(updatedCards);
    },[]);

    return(
        <div className="card-box">
        {wordCards.map((wordCard, idx) => {
          return(
            <Card 
                wordCard={wordCard} 
                key={wordCard.word} 
                onWordCardChange={(updatedWordCard) => handleWordCardChange(idx, updatedWordCard)}/>
            );})
        }
      </div>
    );
}

export default Alltab;