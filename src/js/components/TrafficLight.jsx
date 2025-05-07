import React, { useState } from "react";

const colors = ["red", "yellow", "green"];

export default function TrafficLight() {
  const [activeLight, setActiveLight] = useState();

  return (
    <div className="traffic-light">
      {colors.map((color) => (
        <div
          key={color}
          className={`light ${color} ${activeLight === color ? "active" : ""}`}
          onClick={() => setActiveLight(color)}
         
        ></div>
      ))}
    </div>
  );
}

