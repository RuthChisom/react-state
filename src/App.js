import React from "react";
import "./App.css";
import { NewComp } from "./Components/NewComp";

class App extends React.Component{
  designs = {
    fontStyle: "bold",
    color: "teal"
  };

  render(){
    return(
      <div className="App">
        <h1 style={this.designs}>Welcome</h1>
        <NewComp/>
      </div>
    )
  }
}

export default App;
