"use client";
import { ChangeEvent, useState } from "react";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

const Activity3 = () => {
  const [firstNum, setfirstNum] = useState(0);
  const [secondNum, setsecondNum] = useState(0);

  const handleFirstNum = (e: ChangeEvent<HTMLInputElement>) => {
    setfirstNum(Number(e.target.value));
  };
  const handleSecondNum = (e: ChangeEvent<HTMLInputElement>) => {
    setsecondNum(Number(e.target.value));
  };

  const sum = firstNum + secondNum;
  return (
    <div style={styles.container}>
      <input type="number" value={firstNum} onChange={handleFirstNum} />
      <input type="number" value={secondNum} onChange={handleSecondNum} />
      <h1>SUM: {sum}</h1>
    </div>
  );
};

export default Activity3;
