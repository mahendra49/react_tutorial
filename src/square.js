import React from "react";

const divStyle = {
  outline: "1px solid rgb(20, 176, 76)",
  display: "inline-block",
  width: "25px",
  height: "25px"
};

const Square = props => {
  const { position, isStart, isEnd, isStone } = props.info;
  const squareStyle = { ...divStyle };
  //console.log(`${position} and ${isStart} and ${isEnd}`);
  squareStyle.background = isStart
    ? "rgb(0,255,0)"
    : isEnd
    ? "rgb(255,0,0)"
    : isStone
    ? "brown"
    : "";

  return (
    <div
      onMouseDown={() => props.mouseMoveHandler(position)}
      id={props.info.position}
      className="square"
      style={squareStyle}
    ></div>
  );
};

export default Square;
