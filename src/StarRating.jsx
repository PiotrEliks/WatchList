import Star from "./Star";
import { useState } from "react";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
};

export default function StarRating({ maxRating = 5, color = "#C29E09", size = 48, onSetRating }) {

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  return(
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
            <Star key={i} onRate={() => handleRating(i+1)} full={tempRating ? tempRating >= i + 1 : rating >= i + 1} onHoverIn={() => setTempRating(i + 1)} onHoverOut={() => setTempRating(0)} color={color} size={size}/>
          ))}
      </div>
      <p style={textStyle}>
        {tempRating || rating || ""}
      </p>
    </div>
  );
}