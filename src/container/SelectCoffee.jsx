import { useState } from "react";
import CoffeeButton from "../common/CoffeeButton";

const SelectCoffee = ({ menu }) => {
  const [coffee, setCoffee] = useState(
    Array(menu.length)
      .fill()
      .map((v) => false)
  );

  const change = (num) => {
    setCoffee((prev) => {
      const newArr = prev.map((v, i) => i == num);
      return newArr;
    });
  };

  return (
    <div>
      {menu.map((v, i) => (
        <CoffeeButton
          change={() => change(i)}
          coffee={v}
          isSeleted={coffee[i]}
          text={v}
        />
      ))}
    </div>
  );
};

export default SelectCoffee;
