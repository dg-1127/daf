const StatusButton = ({ text, isSelected, change }) => {
  return (
    <button
      onClick={change}
      style={{ backgroundColor: isSelected ? "indigo" : "white" }}
      className="px-6 py-4 border border-slate-500 font-bold text-base"
    >
      {text}
    </button>
  );
};
export default StatusButton;
