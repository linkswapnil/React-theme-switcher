import React from "react";
import ReactDOM from "react-dom";

import "./styles.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light"
    };
    this.switchTheme = this.switchTheme.bind(this);
  }
  switchTheme() {
    if (this.state.theme === "light") {
      this.setState({ theme: "dark" });
    } else {
      this.setState({ theme: "light" });
    }
  }
  render() {
    let appClass = `App theme-${this.state.theme}`;
    return (
      <div className={appClass}>
        <h1>Hello {this.state.theme}</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button className="button" onClick={this.switchTheme}>
          Switch theme
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
