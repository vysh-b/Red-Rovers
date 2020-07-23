import React, { Component } from "react";
import Square from "./square";

class Grid extends Component {
  state = {};

  render() {
    return (
      <span>
        <span>{this.props.notFound}</span>
        <span className="grid">
          {this.props.setGrid.map((row) => (
            <div>
              {row.map((square) => (
                <Square
                  square={square}
                  row={square.r}
                  col={square.c}
                  gOnClick={this.props.aOnClick}
                ></Square>
              ))}
            </div>
          ))}
        </span>
      </span>
    );
  }
}

export default Grid;
