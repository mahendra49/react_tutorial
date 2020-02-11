export function dij(grid, START, END, ROWLIMIT, COLLIMIT) {
  const START_NODE = grid[START.ROW][START.COL];
  const END_NODE = grid[END.ROW][END.COL];
  //console.log(grid);
  let visitedNodes = [];
  const moveStepX = [0, -1, 0, 1];
  const moveStepY = [1, 0, -1, 0];
  const Queue = [];
  START_NODE.previousSquare = null;
  START_NODE.distance = 0;
  Queue.push(START_NODE);
  //visitedNodes.push(START_NODE);
  while (Queue.length > 0) {
    let curNode = Queue[0];
    Queue.shift();
    //console.log(curNode);
    if (curNode.distance === Infinity) break;
    if (curNode.isVisited || curNode.isStone) continue;
    curNode.isVisited = true;
    if (curNode.position === END_NODE.position) {
      visitedNodes.push(curNode);
      break;
    }
    const xStep = parseInt(curNode.position.split("-")[0]);
    const yStep = parseInt(curNode.position.split("-")[1]);
    //console.log(xStep + "  " + yStep);
    for (let i = 0; i < 4; i++) {
      const moveToX = parseInt(xStep + moveStepX[i]);
      const moveToY = parseInt(yStep + moveStepY[i]);
      //console.log(moveToX + "  " + moveStepY);
      if (isInsideBoard(moveToX, moveToY, ROWLIMIT, COLLIMIT)) {
        let node = grid[moveToX][moveToY];
        if (
          node.isVisited === false &&
          node.position !== grid[START.ROW][START.COL].position &&
          !node.isStone
        ) {
          node.distance = curNode.distance + 1;
          node.previousSquare = curNode;
          Queue.push(node);
          visitedNodes.push(node);
        }
      }
    }
  }
  visitedNodes = visitedNodes.filter(
    node => node.position !== grid[END.ROW][END.COL].position
  );
  //console.log(visitedNodes);
  return visitedNodes;
}

function isInsideBoard(x, y, ROWLIMIT, COLLIMIT) {
  if (x < ROWLIMIT && x >= 0 && y < COLLIMIT && y >= 0) return true;
  return false;
}

export function getPath(visitedNodes, endNode) {
  const path = [];
  while (endNode.previousSquare) {
    path.push(endNode.previousSquare);
    endNode = endNode.previousSquare;
  }
  return path;
}

export default dij;
