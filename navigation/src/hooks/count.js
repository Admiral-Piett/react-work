import { useEffect, useState } from "react";

const useCount = (initialState) => {
  const [count, setCount] = useState(initialState);
  const [incrementValue, setIncrementValue] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementByValue = (event) => {
    event.preventDefault();
    setCount(count + incrementValue);
    setIncrementValue(0);
  };

  const changeIncrementValue = (event) => {
    setIncrementValue(parseInt(event.target.value));
  };

  useEffect(
    (count) => {
      console.log(count);
    },
    [count]
  );

  return {
    count,
    incrementValue,
    increment,
    decrement,
    incrementByValue,
    changeIncrementValue,
  };
};

export { useCount };
