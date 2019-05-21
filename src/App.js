import React, { Component } from "react";
import "./App.css";
import IdBox from "./components/IdBox";
import { gr, ro } from "./images";

class App extends Component {
  state = {
    /*  Initial State */
    character: "",
    image: "",
    name: "",
    message: ""
  };

  display = value => {
    this.setState({
      character: value
    });

    if (value === "Groot") {
      this.setState({
        image: gr,
        name: "Groot",
        message: "I'm Groot!!!!"
      });
    }
    if (value === "Rocket") {
      this.setState({
        image: ro,
        name: "Rocket",
        message: "I'm Rocket!!!!"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="btnGroup">
          <button onClick={() => this.display("Groot")}>Groot</button>
          <button onClick={() => this.display("Rocket")}>Rocket</button>

          <IdBox
            image={this.state.image}
            name={this.state.name}
            message={this.state.message}
          />
        </div>
      </div>
    );
  }
}

export default App;
