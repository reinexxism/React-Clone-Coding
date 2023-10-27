import React, { useState } from "react";
import "../Styles/AppXY.css";

export default function AppXY() {
  const [currentCursor, setCurrentCursor] = useState({ x: 0, y: 0 });

  return (
    <div
      className="container"
      onPointerMove={(e) => {
        // setCurrentCursor({ x: e.clientX, y: e.clientY });
        setCurrentCursor((prev) => ({ ...prev, x: e.clientX }));
        console.log(`x: ${currentCursor.x}, y:${currentCursor.y}`);
      }}
    >
      <div
        className="pointer"
        style={{
          transform: `translate(${currentCursor.x}px, ${currentCursor.y}px)`,
        }}
      ></div>
    </div>
  );
}
