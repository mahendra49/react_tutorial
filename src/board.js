import React from "react";
import Square from "./square";
import { dij, getPath } from "./dij";

const ROWS = 20;
const COLS = 50;
const START = { ROW: 3, COL: 7 };
const END = { ROW: 15, COL: 45 };

class Board extends React.Component {
  constructor(props) {
    super();
    this.state = {
      grid: null
    };
  }

  algo = () => {
    //console.log(Dij(this.state.grid, START, END));
    let { grid } = this.state;
    let path = dij(grid, START, END, ROWS, COLS);

    //console.log(path);
    path.forEach((element, index) => {
      const { position } = element;
      setTimeout(() => {
        document.getElementById(position).style.background = "yellow";
      }, index * 5);
      setTimeout(() => {
        document.getElementById(position).style.background = "blue";
      }, index * 6);
    });

    const animateAfterBaseTime = path.length * 5;
    const shortestPath = getPath(path, grid[END.ROW][END.COL]).reverse();

    for (let i = 1; i < shortestPath.length; i++) {
      const { position } = shortestPath[i];
      setTimeout(() => {
        document.getElementById(position).style.background = "black";
      }, 100 * i + animateAfterBaseTime);
    }
  };

  mouseMoveHandler = position => {
    //console.log(position);
    const xCoor = position.split("-")[0];
    const yCoor = position.split("-")[1];
    let grid = this.state.grid;
    grid[xCoor][yCoor].isStone = !grid[xCoor][yCoor].isStone;
    this.setState({ grid });
    console.log(this.state.grid);
  };

  componentWillMount() {
    let grid = [];
    for (let i = 0; i < ROWS; i++) {
      let tmprow = [];
      for (let j = 0; j < COLS; j++) {
        tmprow.push({
          position: `${i}-${j}`,
          isStart: i === START.ROW && j === START.COL ? true : false,
          isEnd: i === END.ROW && j === END.COL ? true : false,
          previousSquare: null,
          isVisited: false,
          distance: Infinity,
          isStone: false
        });
      }
      grid.push(tmprow);
    }
    this.setState({ grid });
  }

  render() {
    //console.log(this.state.grid);
    return (
      <div>
        <button onClick={this.algo}>Visualize</button>
        <div className="grid">
          {this.state.grid.map((row, rowindex) => {
            return (
              <div key={rowindex}>
                {row.map((element, colindex) => {
                  return (
                    <Square
                      mouseMoveHandler={this.mouseMoveHandler}
                      key={colindex}
                      info={element}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Board;
