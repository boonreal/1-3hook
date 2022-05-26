import React, { Component } from "react";
import Counter from "./components/counter";
import Form from "./components/form";
import Coordinates from "./components/coordinates";

class App extends Component {
  render() {
    return (
      <div>
          <div className="container">
            <h2>Excercie 1 - Counter</h2>
            <Counter/>
          </div>
          <div className="container">
            <h2>Excercie 2 - Counter</h2>
            <Form/>
          </div>
          <div className="container">
            <h2>Excercie 3 - Counter</h2>
            <Coordinates />
          </div>




      </div>
    );
  }
}

export default App;
