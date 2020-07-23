function BFS(sRow, sCol, Grid, diag) {
  console.log("reached bfs");
  let tempGrid = Array(20)
    .fill()
    .map((_) => Array(20).fill(""));

  for (let j = 0; j < 20; j++) {
    for (let k = 0; k < 20; k++) {
      tempGrid[j][k] = {
        r: j,
        c: k,
        val: Grid[j][k].val,
        d: 0,
        visited: false,
      };
    }
  }
  for (let j = 0; j < 20; j++) {
    for (let k = 0; k < 20; k++) {
      if (tempGrid[j][k].val === "3") {
        tempGrid[j][k].visited = true;
      }
    }
  }
  var newList = [];
  var start = tempGrid[sRow][sCol];
  newList.push(start);
  start.visited = true;
  var node;

  while (newList.length) {
    node = newList.pop();
    if (node.val === "2") {
      console.log("found");
      console.log(node.d);
      return node.d;
    }
    //top left
    if (
      node.r - 1 >= 0 &&
      node.c - 1 >= 0 &&
      tempGrid[node.r - 1][node.c - 1].visited === false
    ) {
      tempGrid[node.r - 1][node.c - 1].d = node.d + 1;
      tempGrid[node.r - 1][node.c - 1].visited = true;
      newList.push(tempGrid[node.r - 1][node.c - 1]);
    }
    //top right
    if (
      node.r - 1 >= 0 &&
      node.c + 1 < 20 &&
      tempGrid[node.r - 1][node.c + 1].visited === false
    ) {
      tempGrid[node.r - 1][node.c + 1].d = node.d + 1;
      tempGrid[node.r - 1][node.c + 1].visited = true;
      newList.push(tempGrid[node.r - 1][node.c + 1]);
    }
    //bottom left
    if (
      node.r + 1 < 20 &&
      node.c - 1 >= 0 &&
      tempGrid[node.r + 1][node.c - 1].visited === false
    ) {
      tempGrid[node.r + 1][node.c - 1].d = node.d + 1;
      tempGrid[node.r + 1][node.c - 1].visited = true;
      newList.push(tempGrid[node.r + 1][node.c - 1]);
    }
    //bottom right
    if (
      node.r + 1 < 20 &&
      node.c + 1 < 20 &&
      tempGrid[node.r + 1][node.c + 1].visited === false
    ) {
      tempGrid[node.r + 1][node.c + 1].d = node.d + 1;
      tempGrid[node.r + 1][node.c + 1].visited = true;
      newList.push(tempGrid[node.r + 1][node.c + 1]);
    }
    //moving up
    if (node.r - 1 >= 0 && tempGrid[node.r - 1][node.c].visited === false) {
      tempGrid[node.r - 1][node.c].d = node.d + 1;
      tempGrid[node.r - 1][node.c].visited = true;
      newList.push(tempGrid[node.r - 1][node.c]);
    }
    //moving down
    if (node.r + 1 < 20 && tempGrid[node.r + 1][node.c].visited === false) {
      tempGrid[node.r + 1][node.c].d = node.d + 1;
      tempGrid[node.r + 1][node.c].visited = true;
      newList.push(tempGrid[node.r + 1][node.c]);
    }
    //moving left
    if (node.c - 1 >= 0 && tempGrid[node.r][node.c - 1].visited === false) {
      tempGrid[node.r][node.c - 1].d = node.d + 1;
      tempGrid[node.r][node.c - 1].visited = true;
      newList.push(tempGrid[node.r][node.c - 1]);
    }
    //moving right
    if (node.c + 1 < 20 && tempGrid[node.r][node.c + 1].visited === false) {
      tempGrid[node.r][node.c + 1].d = node.d + 1;
      tempGrid[node.r][node.c + 1].visited = true;
      newList.push(tempGrid[node.r][node.c + 1]);
    }
  }
}
export default BFS;
