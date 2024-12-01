import { useState } from "react";
import { FaMoon, FaRegSun } from "react-icons/fa";

const DarkMode = () => {
  const [sun, setSun] = useState(false);

  const change = () => {
    alert(sun ? "화이트모드" : "다크모드");
    setSun((v) => {
      return !v;
    });
  };

  return (
    <button onClick={() => change()}>{sun ? <FaRegSun /> : <FaMoon />}</button>
  );
};

export default DarkMode;
