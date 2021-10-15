import React, { useState, useEffect, useRef } from "react";
import { Button, Card, Modal, ModalBody, ModalHeader } from "reactstrap";
import FlippyCard from '../components/flippyCard';
import { MATCHCARDS } from "../components/matchCards";

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i -1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}

export default function CardGame () { 
  const [cards, setCards] = useState(
    shuffleCards.bind(null, MATCHCARDS.concat(MATCHCARDS))
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };

  const enable = () => {
    setShouldDisableAllCards(false);
  };
  
  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === MATCHCARDS.length) {
      setShowModal(true);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({...prev, [cards[first].type]: true}));
      setOpenCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };

  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves +1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      setTimeout(evaluate, 500);
    }
    return() => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);

  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    setCards(shuffleCards(MATCHCARDS.concat(MATCHCARDS)))
  }

  return(
    <div>
      <div className="center">
        <h1 className="rainbow giant flippy">Flippy Cards!</h1>
        <h3>Select two cards in a row with the same drawing to make them disappear!</h3>
      </div>
      <div className="gameGrid">
        {cards.map((card, index) => {
          return (
            <FlippyCard
              key={index}
              card={card}
              index={index}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
      <div className="center">
        <h4>Moves: {moves}</h4>
        <Button onClick={handleRestart} size="lg">Start Over</Button>
      </div>
      <Modal size="sm" isOpen={showModal}>
        <ModalHeader className="center">You did it!</ModalHeader>
        <ModalBody>
          <div>You won the game in {moves} moves.</div>
          <Button onClick={handleRestart}>Play Again!</Button>
        </ModalBody>
      </Modal>
      <style type="text/css">
        {`.card {
          margin: 1rem;
          padding: 1rem;
          width: 9rem;
          height: 12rem;
          flex-basis: 45%;
          text-align: center;
          text-decoration: none;
          color: white;
          background: -webkit-linear-gradient(left, rgb(133, 48, 85), rgba(228, 164, 85), rgba(255, 246, 139), rgba(130, 182, 106), rgba(121, 116, 169));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-color: transparent;
          border: .01em solid rgba(255, 255, 255, 0.171);
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          } 
        `}
      </style>
    </div>
  )}