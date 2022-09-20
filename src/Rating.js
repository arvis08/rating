import React, { useState } from "react";
import { RiCheckboxBlankFill } from "react-icons/ri";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      <label>
        <input
          type="radio"
          name="rating"
          value={1}
          onClick={() => setRating(1)}
        />

        <RiCheckboxBlankFill
          size={40}
          className={1 <= (hover || rating) ? "class"+hover : ""}
          onMouseEnter={() => {
            setHover(1);
          }}
          onMouseLeave={() => setHover(rating)}
        />
      </label>

      <label>
        <input
          type="radio"
          name="rating"
          value={2}
          onClick={() => setRating(2)}
        />

        <RiCheckboxBlankFill
          size={40}
         
          className={2 <= (hover || rating) ? "class"+hover : ""}
          onMouseEnter={() => {
            setHover(2);
          }}
          onMouseLeave={() => setHover(rating)}
        />
      </label>

      <label>
        <input
          type="radio"
          name="rating"
          value={3}
          onClick={() => setRating(3)}
        />

        <RiCheckboxBlankFill
          size={40}
         
          className={3 <= (hover || rating) ? "class"+hover : ""}
          onMouseEnter={() => {
            setHover(3);
          }}
          onMouseLeave={() => setHover(rating)}
        />
      </label>

      <label>
        <input
          type="radio"
          name="rating"
          value={4}
          onClick={() => setRating(4)}
        />

        <RiCheckboxBlankFill
          size={40}
         
          className={4 <= (hover || rating) ? "class"+hover : ""}
          onMouseEnter={() => {
            setHover(4);
          }}
          onMouseLeave={() => setHover(rating)}
        />
      </label>

      <label>
        <input
          type="radio"
          name="rating"
          value={5}
          onClick={() => setRating(5)}
        />

        <RiCheckboxBlankFill
          size={40}
         
          className={5 <= (hover || rating) ? "class"+hover : ""}
          onMouseEnter={() => {
            setHover(5);
          }}
          onMouseLeave={() => setHover(rating)}
        />
      </label>  
    </div>
  );
};

export default Rating;
