import React from "react";
import classnames from "classnames";
import GD from "../images/Favicon.png";
import "./flippyCard.scss";

const FlippyCard = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card flippyCard", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-front-face">
        <img className="front" src={GD} alt="GD" />
      </div>
      <div className="card-face card-back-face">
        <img className="back" src={require(`../images/gallery/${card.image}`).default} alt="GD" />
      </div>
      {/* <style type="text/css">
        {`.card {
          width: 100%;
          height: 100%;
          border-radius: 4px;
          box-shadow: 2px 2px 4px 4px #DEDEDE;
          transition: 0.3s;
          transform-style: preserve-3d;
          position: relative;
          cursor: pointer;
          
          .card-front-face {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .card-back-face {
            transform: rotateY(180deg);
          }

          .is-flipped {
            transform: rotateY(180deg);
          }

          .is-inactive {
            opacity: 0;
          }`
        }
      </style> */}
    </div>
  );
};

export default FlippyCard;