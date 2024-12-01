const CoffeeButton = ({ text, isSeleted, change }) => {
  return (
    <button
      onClick={change}
      className={`border p-3 text-base text-slate-600 ${
        isSeleted ? "bg-slate-700" : "bg-whitewhite"
      }`}
    >
      {text}
    </button>
  );
};

export default CoffeeButton;
