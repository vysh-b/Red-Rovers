import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div>
        <img
          className="logo"
          src={require("./logo192.png")}
          alt="image gayab"
        />
        <span className="menusp">
          <button
            className="btn-default m-2 btn-block opt"
            onClick={this.props.startSearch}
          >
            START SEARCH
          </button>
          <form>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="set-squares"
                  value="1"
                  checked={this.props.activeOption === "1"}
                  onChange={(changeEvent) =>
                    this.props.optionChange(changeEvent.target.value)
                  }
                  className="set-squares"
                />
                Set Start
              </label>
            </div>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="set-squares"
                  value="2"
                  checked={this.props.activeOption === "2"}
                  onChange={(changeEvent) =>
                    this.props.optionChange(changeEvent.target.value)
                  }
                  className="set-squares"
                />
                Set Destination
              </label>
            </div>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="set-squares"
                  value="3"
                  checked={this.props.activeOption === "3"}
                  onChange={(changeEvent) =>
                    this.props.optionChange(changeEvent.target.value)
                  }
                  className="set-squares"
                />
                Set Obstacles
              </label>
            </div>
          </form>
          <label>
            <input
              name="diag"
              type="checkbox"
              checked={this.props.diag}
              onChange={(changeEvent) =>
                this.props.diagChange(changeEvent.target.checked)
              }
            />
            Allow Diagonal Paths
          </label>

          <button
            className="btn-default m-2 btn-block opt"
            onClick={this.props.clrObs}
          >
            CLEAR OBSTACLES
          </button>
          <div>
            <button
              className="btn-default m-2 btn-block opt"
              onClick={this.props.rstBrd}
            >
              RESET BOARD
            </button>
          </div>
        </span>
      </div>
    );
  }
}

export default Menu;
