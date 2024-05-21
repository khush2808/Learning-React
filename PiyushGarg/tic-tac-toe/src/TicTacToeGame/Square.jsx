import React from "react";

const Square = (props) => {
  return (
    <div
			onClick={props.onClick}
      style={{ border: "1px", height: "100px", width: "100px" }}
      className="square-container"
    >
      <button className="square">{props.value}</button>
    </div>
  );
};
export default Square;
