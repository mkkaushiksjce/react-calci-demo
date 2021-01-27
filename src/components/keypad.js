import React, { Component } from "react";

class KeyPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scientificMode: false,
      darkMode: false
    };
  }

  toggleScientific = () => {
    if (this.state.scientificMode) {
      this.setState({
        scientificMode: false
      });
    } else {
      this.setState({
        scientificMode: true
      });
    }
  };

  toggleDarkMode = () => {
    if (this.state.darkMode) {
      this.setState({
        darkMode: false
      });
    } else {
      this.setState({
        darkMode: true
      });
    }
  };

  render() {
    let darkMode = this.state.darkMode;
    let scientificMode = this.state.scientificMode;
    return (
      <div className="button">
        {scientificMode ? (
          <button
            id="scientificSelect"
            name="CE"
            onClick={this.toggleScientific}
          >
            Scientific
          </button>
        ) : (
          <button
            id="scientificSelect"
            name="CE"
            onClick={this.toggleScientific}
          >
            Normal
          </button>
        )}
        {darkMode ? (
          <button name="Dark" onClick={e => this.props.onClick(e.target.name)}>
            Light
          </button>
        ) : (
          <button name="Dark" onClick={e => this.props.onClick(e.target.name)}>
            Dark
          </button>
        )}
        <button name="C" onClick={e => this.props.onClick(e.target.name)}>
          C
        </button>
        <br />

        <button name="1" onClick={e => this.props.onClick(e.target.name)}>
          1
        </button>
        <button name="2" onClick={e => this.props.onClick(e.target.name)}>
          2
        </button>
        <button name="3" onClick={e => this.props.onClick(e.target.name)}>
          3
        </button>
        {scientificMode ? (
          <button name="+" onClick={e => this.props.onClick(e.target.name)}>
            +
          </button>
        ) : (
          <button name="-" onClick={e => this.props.onClick(e.target.name)}>
            +/-
          </button>
        )}
        <br />

        <button name="4" onClick={e => this.props.onClick(e.target.name)}>
          4
        </button>
        <button name="5" onClick={e => this.props.onClick(e.target.name)}>
          5
        </button>
        <button name="6" onClick={e => this.props.onClick(e.target.name)}>
          6
        </button>
        {scientificMode ? (
          <button name="-" onClick={e => this.props.onClick(e.target.name)}>
            -
          </button>
        ) : (
          <button name="x2" onClick={e => this.props.onClick(e.target.name)}>
            x2
          </button>
        )}
        <br />

        <button name="7" onClick={e => this.props.onClick(e.target.name)}>
          7
        </button>
        <button name="8" onClick={e => this.props.onClick(e.target.name)}>
          8
        </button>
        <button name="9" onClick={e => this.props.onClick(e.target.name)}>
          9
        </button>
        {scientificMode ? (
          <button name="*" onClick={e => this.props.onClick(e.target.name)}>
            x
          </button>
        ) : (
          <button name="sqrt" onClick={e => this.props.onClick(e.target.name)}>
            Sqrt
          </button>
        )}
        <br />

        <button name="." onClick={e => this.props.onClick(e.target.name)}>
          .
        </button>
        <button name="0" onClick={e => this.props.onClick(e.target.name)}>
          0
        </button>
        <button name="=" onClick={e => this.props.onClick(e.target.name)}>
          =
        </button>
        {scientificMode ? (
          <button name="/" onClick={e => this.props.onClick(e.target.name)}>
            ÷
          </button>
        ) : (
          <button name=" " onClick={e => this.props.onClick(e.target.name)} />
        )}
        <br />
      </div>
    );
  }
}

export default KeyPad;
