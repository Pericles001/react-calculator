import React, { Component } from "react";

class KeyPadComponent extends Component {
  render() {
    return (
      <div className="button">
        <button onClick={(e) => this.props.onClick(e.target.name)} name="(">
          (
        </button>
        <button onClick={(e) => this.props.onClick(e.target.name)} name="CE">
          CE
        </button>
        <button onClick={(e) => this.props.onClick(e.target.name)} name=")">
          )
        </button>
        <button onClick={(e) => this.props.onClick(e.target.name)} name="C">
          C
        </button>
        <br />

        <button onClick={(e) => this.props.onClick(e.target.name)} name="1">
          1
        </button>
        <button onClick={(e) => this.props.onClick(e.target.name)} name="2">
          2
        </button>
        <button onClick={(e) => this.props.onClick(e.target.name)} name="3">
          3
        </button>
        <button onClick={(e) => this.props.onClick(e.target.name)} name="+">
          +
        </button>
        <br />
        <button onClick={(e) => this.props.onClick(e.target.name)} name="4">
          4
        </button>
        <button onClick={(e) => this.props.onClick(e.target.name)} name="5">
          5
        </button>
        <button onClick={(e) => this.props.onClick(e.target.name)} name="6">
          6
        </button>
        <button onClick={(e) => this.props.onClick(e.target.name)} name="-">
          -
        </button>
        <br />
        <button onClick={(e) => this.props.onClick(e.target.name)} name="7">
          7
        </button>
        <button onClick={(e) => this.props.onClick(e.target.name)} name="8">
          8
        </button>
        <button onClick={(e) => this.props.onClick(e.target.name)} name="9">
          9
        </button>
        <button onClick={(e) => this.props.onClick(e.target.name)} name="*">
          *
        </button>
        <br />
        <button onClick={(e) => this.props.onClick(e.target.name)} name=".">
          .
        </button>
        <button onClick={(e) => this.props.onClick(e.target.name)} name="0">
          0
        </button>
        <button onClick={(e) => this.props.onClick(e.target.name)} name="=">
          =
        </button>
        <button onClick={(e) => this.props.onClick(e.target.name)} name="/">
          /
        </button>
        <br />
      </div>
    );
  }
}

export default KeyPadComponent;
