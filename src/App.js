import React, { Component } from "react";
import "./app.css";
import KeyPad from "./components/keypad";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: ""
    };
  }

  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  onKeypadPress = e => {
    console.log("event");
  };

  calculateScientific = button => {
    if (button === "=") {
    } else if (button === "=") {
    } else if (button === "=") {
    } else if (button === "=") {
    } else {
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
          <h1>Calculator</h1>
          <KeyPad
            result={this.state.result}
            onClick={this.onClick}
            onClickScientific={this.calculateScientific}
            onKeypadPress={this.onKeypadPress}
          />
        </div>
      </div>
    );
  }
}

export default App;
