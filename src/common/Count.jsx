import { useState } from "react";

const Count = (props) => {
  const [num, setNum] = useState(props.num);

  const plusOne = () => {
    setNum((v) => {
      return v + 1;
    });
  };

  const reset = () => {
    setNum((v) => {
      return props.num;
    });
  };

  return (
    <>
      <span>{num}</span>
      <button onClick={plusOne} className="p-2 ">
        plus
      </button>
      <button onClick={reset} className="p-2">
        reset
      </button>
    </>
  );
};

export default Count;
