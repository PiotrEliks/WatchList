import {useState} from 'react';

export default function Box({ children }) {

  const [isOpen, setIsOpen] = useState(true);

  const emoji_x = {
    color: "transparent",
    textShadow: "0 0 0 #ff0000",
  }
  const emoji_plus = {
    color: "transparent",
    textShadow: "0 0 0 #0c8f17",
  }

  return(
    <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <span style={emoji_x}>❌</span> : <span style={emoji_plus}>➕</span>}
          </button>
          {isOpen && children}
        </div>
  );
}