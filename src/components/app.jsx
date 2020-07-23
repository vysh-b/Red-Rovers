import React, { Component } from "react";
import Grid from "./grid";
import Menu from "./menu";
import BFS from "./pathFind";
const sR = 9;
const sC = 3;
const eR = 9;
const eC = 16;

let initialGrid = Array(20)
  .fill()
  .map((_) => Array(20).fill(""));

for (let j = 0; j < 20; j++) {
  for (let k = 0; k < 20; k++) {
    initialGrid[j][k] = { r: j, c: k, val: "0" };
  }
}

initialGrid[sR][sC].val = "1";
initialGrid[eR][eC].val = "2";

class App extends Component {
  state = {
    diagSelected: false,
    selectedOption: "3",
    startRow: sR,
    startCol: sC,
    endRow: eR,
    endCol: eC,
    currentGrid: initialGrid,
  };

  handleOptionChange = (value) => {
    this.setState({
      selectedOption: value,
    });
  };
  handleDiagChange = (value) => {
    this.setState({
      diagSelected: value,
    });
  };
  handleClearObs = () => {
    let tempGrid = Array(20)
      .fill()
      .map((_) => Array(20).fill(""));

    for (let j = 0; j < 20; j++) {
      for (let k = 0; k < 20; k++) {
        tempGrid[j][k] = { r: j, c: k, val: "0" };
      }
    }

    tempGrid[this.state.startRow][this.state.startCol].val = "1";
    tempGrid[this.state.endRow][this.state.endCol].val = "2";
    this.setState({ currentGrid: tempGrid });

    return;
  };

  handleResetBoard = () => {
    let tempGrid = Array(20)
      .fill()
      .map((_) => Array(20).fill(""));

    for (let j = 0; j < 20; j++) {
      for (let k = 0; k < 20; k++) {
        tempGrid[j][k] = { r: j, c: k, val: "0" };
      }
    }
    this.setState({ startRow: sR, startCol: sC, endRow: eR, endCol: eC });
    tempGrid[sR][sC].val = "1";
    tempGrid[eR][eC].val = "2";

    this.setState({ currentGrid: tempGrid });

    return;
  };
  handleClick = (row, col) => {
    let tempGrid = this.state.currentGrid;
    let i = this.state.selectedOption;
    //setting start and end
    if (i === "1" || i === "2") {
      if (
        (this.state.startRow === row && this.state.startCol === col) ||
        (this.state.endRow === row && this.state.endCol === col)
      ) {
        return;
      } else {
      }
      if (i === "1") {
        tempGrid[this.state.startRow][this.state.startCol].val = "0";
        tempGrid[row][col].val = "1";
        this.setState({ startRow: row, startCol: col });
      } else {
        tempGrid[this.state.endRow][this.state.endCol].val = "0";
        tempGrid[row][col].val = "2";
        this.setState({ endRow: row, endCol: col });
      }
    }

    //setting obstacles
    else {
      if (i === "3") {
        if (
          (this.state.startRow === row && this.state.startCol === col) ||
          (this.state.endRow === row && this.state.endCol === col)
        ) {
          return;
        } else {
          tempGrid[row][col].val = tempGrid[row][col].val === "0" ? "3" : "0";
        }
      }
    }

    this.setState({ currentGrid: tempGrid });
    return;
  };
  handleSearch = () => {
    console.log("reached handle");
    BFS(
      this.state.startRow,
      this.state.startCol,
      this.state.currentGrid,
      this.state.diagSelected
    );
  };
  render() {
    return (
      <div>
        <Menu
          optionChange={this.handleOptionChange}
          activeOption={this.state.selectedOption}
          clrObs={this.handleClearObs}
          rstBrd={this.handleResetBoard}
          startSearch={this.handleSearch}
          diag={this.state.diagSelected}
          diagChange={this.handleDiagChange}
        />

        <Grid setGrid={this.state.currentGrid} aOnClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
