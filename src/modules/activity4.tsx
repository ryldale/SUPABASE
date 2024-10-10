"use client";
import { useState } from "react";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};

const Activity3 = () => {
  const [size, setSize] = useState(1);
  const [color, setColor] = useState("#000000");

  const handleClick = () => {
    setSize(size * 2);
    setColor(randomColor());
  };
  return (
    <div style={styles.container}>
      <button
        style={{ transform: `scale(${size})`, color: color }}
        onClick={handleClick}
      >
        GROW
      </button>
    </div>
  );
};

export default Activity3;
