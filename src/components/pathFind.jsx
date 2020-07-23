function BFS(sRow, sCol, Grid, diag) {
  console.log("reached bfs");
  let tempGrid = Array(20)
    .fill()
    .map((_) => Array(20).fill(""));
  let retGrid = Array(20)
    .fill()
    .map((_) => Array(20).fill(""));

  let found = false;
  for (let j = 0; j < 20; j++) {
    for (let k = 0; k < 20; k++) {
      tempGrid[j][k] = {
        r: j,
        c: k,
        val: Grid[j][k].val === "4" ? "0" : Grid[j][k].val,
        d: 0,
        visited: false,
        prevR: 0,
        prevC: 0,
      };
      retGrid[j][k] = {
        r: j,
        c: k,
        val: Grid[j][k].val === "4" ? "0" : Grid[j][k].val,
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
    node = newList.shift();
    if (node.val === "2") {
      found = true;
      break;
    }
    //top left

    ///////
    //moving up
    if (node.r - 1 >= 0 && tempGrid[node.r - 1][node.c].visited === false) {
      tempGrid[node.r - 1][node.c].d = node.d + 1;
      tempGrid[node.r - 1][node.c].visited = true;
      tempGrid[node.r - 1][node.c].prevR = node.r;
      tempGrid[node.r - 1][node.c].prevC = node.c;
      newList.push(tempGrid[node.r - 1][node.c]);
    }
    //moving down
    if (node.r + 1 < 20 && tempGrid[node.r + 1][node.c].visited === false) {
      tempGrid[node.r + 1][node.c].d = node.d + 1;
      tempGrid[node.r + 1][node.c].visited = true;
      tempGrid[node.r + 1][node.c].prevR = node.r;
      tempGrid[node.r + 1][node.c].prevC = node.c;
      newList.push(tempGrid[node.r + 1][node.c]);
    }
    //moving left
    if (node.c - 1 >= 0 && tempGrid[node.r][node.c - 1].visited === false) {
      tempGrid[node.r][node.c - 1].d = node.d + 1;
      tempGrid[node.r][node.c - 1].visited = true;
      tempGrid[node.r][node.c - 1].prevR = node.r;
      tempGrid[node.r][node.c - 1].prevC = node.c;
      newList.push(tempGrid[node.r][node.c - 1]);
    }
    //moving right
    if (node.c + 1 < 20 && tempGrid[node.r][node.c + 1].visited === false) {
      tempGrid[node.r][node.c + 1].d = node.d + 1;
      tempGrid[node.r][node.c + 1].visited = true;
      tempGrid[node.r][node.c + 1].prevR = node.r;
      tempGrid[node.r][node.c + 1].prevC = node.c;
      newList.push(tempGrid[node.r][node.c + 1]);
    }
    if (diag === true) {
      if (
        node.r - 1 >= 0 &&
        node.c - 1 >= 0 &&
        tempGrid[node.r - 1][node.c - 1].visited === false
      ) {
        tempGrid[node.r - 1][node.c - 1].d = node.d + 1;
        tempGrid[node.r - 1][node.c - 1].visited = true;
        tempGrid[node.r - 1][node.c - 1].prevR = node.r;
        tempGrid[node.r - 1][node.c - 1].prevC = node.c;

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
        tempGrid[node.r - 1][node.c + 1].prevR = node.r;
        tempGrid[node.r - 1][node.c + 1].prevC = node.c;
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
        tempGrid[node.r + 1][node.c - 1].prevR = node.r;
        tempGrid[node.r + 1][node.c - 1].prevC = node.c;
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
        tempGrid[node.r + 1][node.c + 1].prevR = node.r;
        tempGrid[node.r + 1][node.c + 1].prevC = node.c;
        newList.push(tempGrid[node.r + 1][node.c + 1]);
      }
    }
  }

  if (!found) {
    return found;
  } else {
    node = tempGrid[node.prevR][node.prevC];
    while (node.val !== "1") {
      retGrid[node.r][node.c].val = "4";
      node = tempGrid[node.prevR][node.prevC];
    }
    return retGrid;
  }
}
export default BFS;
