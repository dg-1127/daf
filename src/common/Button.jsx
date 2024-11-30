const Button = ({ num, coffeeName }) => {
  const coffee = (count) => {
    alert(`${coffeeName} 커피 ${count}개 주문하셨습니다.`);
  };

  return (
    <button
      onClick={() => coffee(num)}
      className="p-3 bg-black border-r-2 text-white"
    >
      {coffeeName}
    </button>
  );
};

export default Button;
