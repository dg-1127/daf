import { IoHomeOutline } from "react-icons/io5";
import Icon from "./presentation/icon/icon";
import { CiSearch } from "react-icons/ci";
import Button from "./common/Button";
import Toggle from "./common/Toggle";
import FruitButton from "./common/FruitButton";
import Count from "./common/Count";
import Input from "./common/Input";
import Register from "./common/Register";

function App() {
  return (
    <div className="App">
      <Icon icon={<IoHomeOutline />} title={"Home"} />
      <Icon icon={<CiSearch />} title={"Search"} />
      <Button coffeeName={"아메리카노"} num={3} />
      <Button coffeeName={"라떼"} num={1} />
      <Toggle />
      <FruitButton a={"🍐"} b={"🍑"} />
      <Count num={0} />
      <Input />
      <Register />
    </div>
  );
}

export default App;
