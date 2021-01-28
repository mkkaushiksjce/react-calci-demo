import React, { Component } from "react";
import ClassNames from "classnames";

class KeyPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scientificMode: false,
      darkMode: true
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
    let { darkMode } = this.state;
    let { scientificMode } = this.state;
    let { result } = this.props;

    return (
      <div className="button">
        <div className={ClassNames("result", { "result-dark": darkMode })}>
          {/*
            <input
              type="text"
              value={result}
              onKeyDown={e => this.props.onKeypadPress(e)}
            />
          */}
          <p>{result}</p>
        </div>
        {scientificMode ? (
          <button
            id="scientificSelect"
            name="CE"
            onClick={this.toggleScientific}
            className={ClassNames({ "digits-dark": darkMode })}
          >
            Scientific
          </button>
        ) : (
          <button
            id="scientificSelect"
            name="CE"
            onClick={this.toggleScientific}
            className={ClassNames({ "digits-dark": darkMode })}
          >
            Normal
          </button>
        )}
        {darkMode ? (
          <button
            name="Dark"
            className={ClassNames({ "digits-dark": darkMode })}
            onClick={this.toggleDarkMode}
          >
            Light
          </button>
        ) : (
          <button
            name="Dark"
            className={ClassNames({ "digits-dark": darkMode })}
            onClick={this.toggleDarkMode}
          >
            Dark
          </button>
        )}
        <button
          name="C"
          className={ClassNames({ "operations-dark": darkMode })}
          onClick={e => this.props.onClick(e.target.name)}
        >
          C
        </button>
        <br />

        <button
          name="1"
          className={ClassNames({ "digits-dark": darkMode })}
          onClick={e => this.props.onClick(e.target.name)}
        >
          1
        </button>
        <button
          name="2"
          className={ClassNames({ "digits-dark": darkMode })}
          onClick={e => this.props.onClick(e.target.name)}
        >
          2
        </button>
        <button
          name="3"
          className={ClassNames({ "digits-dark": darkMode })}
          onClick={e => this.props.onClick(e.target.name)}
        >
          3
        </button>
        {scientificMode ? (
          <button
            name="+"
            className={ClassNames({ "operations-dark": darkMode })}
            onClick={e => this.props.onClick(e.target.name)}
          >
            +
          </button>
        ) : (
          <button
            name="invertSign"
            className={ClassNames({ "operations-dark": darkMode })}
            onClick={e => this.props.onClickScientific(e.target.name)}
          >
            +/-
          </button>
        )}
        <br />

        <button
          name="4"
          className={ClassNames({ "digits-dark": darkMode })}
          onClick={e => this.props.onClick(e.target.name)}
        >
          4
        </button>
        <button
          name="5"
          className={ClassNames({ "digits-dark": darkMode })}
          onClick={e => this.props.onClick(e.target.name)}
        >
          5
        </button>
        <button
          name="6"
          className={ClassNames({ "digits-dark": darkMode })}
          onClick={e => this.props.onClick(e.target.name)}
        >
          6
        </button>
        {scientificMode ? (
          <button
            name="-"
            className={ClassNames({ "operations-dark": darkMode })}
            onClick={e => this.props.onClick(e.target.name)}
          >
            -
          </button>
        ) : (
          <button
            name="square"
            className={ClassNames({ "operations-dark": darkMode })}
            onClick={e => this.props.onClickScientific(e.target.name)}
          >
            x<sup>2</sup>
          </button>
        )}
        <br />

        <button
          name="7"
          className={ClassNames({ "digits-dark": darkMode })}
          onClick={e => this.props.onClick(e.target.name)}
        >
          7
        </button>
        <button
          name="8"
          className={ClassNames({ "digits-dark": darkMode })}
          onClick={e => this.props.onClick(e.target.name)}
        >
          8
        </button>
        <button
          name="9"
          className={ClassNames({ "digits-dark": darkMode })}
          onClick={e => this.props.onClick(e.target.name)}
        >
          9
        </button>
        {scientificMode ? (
          <button
            name="*"
            className={ClassNames({ "operations-dark": darkMode })}
            onClick={e => this.props.onClick(e.target.name)}
          >
            x
          </button>
        ) : (
          <button
            className={ClassNames({ "operations-dark": darkMode })}
            name="cube"
            onClick={e => this.props.onClickScientific(e.target.name)}
          >
            x<sup>3</sup>
          </button>
        )}
        <br />

        <button
          name="."
          className={ClassNames({ "digits-dark": darkMode })}
          onClick={e => this.props.onClick(e.target.name)}
        >
          .
        </button>
        <button
          name="0"
          className={ClassNames({ "digits-dark": darkMode })}
          onClick={e => this.props.onClick(e.target.name)}
        >
          0
        </button>
        <button
          name="="
          className={ClassNames({ "digits-dark": darkMode })}
          onClick={e => this.props.onClick(e.target.name)}
        >
          =
        </button>
        {scientificMode ? (
          <button
            name="/"
            className={ClassNames({ "operations-dark": darkMode })}
            onClick={e => this.props.onClick(e.target.name)}
          >
            ÷
          </button>
        ) : (
          <button
            name="sqrt"
            className={ClassNames({ "operations-dark": darkMode })}
            onClick={e => this.props.onClickScientific(e.target.name)}
          >
            &#8730;
          </button>
        )}
        <br />
      </div>
    );
  }
}

export default KeyPad;
