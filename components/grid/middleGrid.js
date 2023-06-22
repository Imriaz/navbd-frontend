import React from "react";

const MiddleGrid = () => {
  const gridLines = Array.apply(null, Array(5));
  return (
    <div className="grid-block">
      {gridLines.map((_, index) => (
        <span
          className={
            index == gridLines.length - 1
              ? "gridline-right"
              : index != 0
              ? "gridline-left"
              : ""
          }
        ></span>
      ))}
    </div>
  );
};

export default MiddleGrid;
