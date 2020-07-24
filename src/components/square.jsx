import React, { Component } from "react";

class Square extends Component {
  render() {
    return (
      <button
        className={this.setStyle(this.props.square)}
        onClick={() => this.props.gOnClick(this.props.row, this.props.col)}
      ></button>
    );
    console.log(this.props.row, this.props.col);
  }
  //0empty, 1start, 2end, 3obs
  setStyle = (square) => {
    let style = "sq border btn m-0 rounded-0 btn-";
    style +=
      square.val === "1"
        ? "success"
        : square.val === "2"
        ? "danger"
        : square.val === "0"
        ? "light"
        : square.val === "3"
        ? "secondary"
        : "warning";
    return style;
  };
}

export default Square;
