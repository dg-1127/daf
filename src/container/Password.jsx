import { useState } from "react";

const Password = () => {
  const [check, setCheck] = useState({
    password: "",
    passwordCheck: "",
    isSame: true,
  });

  const change1 = (e) => {
    const { value } = e.target;
    setCheck((prev) => {
      return { ...prev, password: value, isSame: value == prev.passwordCheck };
    });
  };

  const change2 = (e) => {
    const { value } = e.target;
    setCheck((prev) => {
      return { ...prev, passwordCheck: value, isSame: value == prev.password };
    });
  };

  return (
    <>
      <div className="flex gap-1 border border-black bg-blue-400 p-2">
        <span>비밀번호 입력</span>
        <input onChange={(e) => change1(e)} type="text" />
      </div>
      <div className="flex gap-1 border border-black bg-blue-400 p-2">
        <span>비밀번호 확인</span>
        <input onChange={(e) => change2(e)} type="text" />
      </div>
      <button
        className={`border border-black ${
          check.isSame ? "bg-blue-300" : "bg-red-300"
        }`}
      >
        {check.isSame ? "일치" : "불일치"}
      </button>
    </>
  );
};

export default Password;
