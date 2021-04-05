import React, { Component } from "react";
import KeyPadComponent from "./components/KeyPadComponent";
import ResultComponent from "./components/ResultComponent";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ""
    };
  }

  calculate = () => {
    try {
      this.setState({
        //eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple calculator</h1>
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
