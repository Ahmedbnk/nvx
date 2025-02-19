
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const HeartButton = ({ onVote, userId }) => {
  const [isRed, setIsRed] = useState(false);

  return (
    <FaHeart
      className="heart-icon"
      style={{ fill: isRed ? "red" : "none", cursor: "pointer" }}
      onClick={() => {
        setIsRed(!isRed);
        if (onVote) {
          onVote(userId);
        }
      }}
    />
  );
};

export default HeartButton;

