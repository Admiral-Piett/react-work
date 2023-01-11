import { useState } from "react";
import bird from "../static/bird.svg";
import cat from "../static/cat.svg";
import cow from "../static/cow.svg";
import dog from "../static/dog.svg";
import gator from "../static/gator.svg";
import heart from "../static/heart.svg";
import horse from "../static/horse.svg";

import "../styles/AnimalShow.css";

const svgMap = {
  bird, // creates a key and assigns a value at the same time.
  cat: cat,
  cow: cow,
  dog: dog,
  gator: gator,
  horse: horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        alt="heart"
        className="heart"
        src={heart}
        style={{
          width: 10 + 10 * clicks + "px",
        }}
      />
    </div>
  );
}

export default AnimalShow;
