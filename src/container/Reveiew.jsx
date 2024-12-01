import { useState } from "react";

const Review = () => {
  const [num, setNum] = useState(0);

  const up = () => {
    setNum((v) => {
      return v + 1;
    });
  };

  return <button onClick={() => up()}>{num}</button>;
};

export default Review;