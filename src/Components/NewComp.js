import React from "react";
import db from "./db.jpg";
import mom from "./mom.png";

export class NewComp extends React.Component{
  constructor(props){
      super(props)

      this.state = {
          message: "Kindly click the Subscribe button",
          sub: "Subscribe",
          imageURL: db
      }
  }

  designs = {
    fontStyle: "italic",
    color: "purple"
  };

  Buttonchange = () =>{
      this.setState({
          message: "Hit the icon below to never miss an update",
          sub: "Subcribed"
      });
  };

  Imagechange = () =>{
    this.setState({
        message: "Yippee! Thanks! Get ready to be entertained all the wayyyyyyy",
        imageURL: mom
    });
};

  render(){
    return(
      <div >
        <h1 style={this.designs}>{this.state.message}</h1>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <p>
            <img style={{width:"50px", height:"50px"}} src={this.state.imageURL} alt="" onClick={this.Imagechange} />
        </p>
      </div>
    )
  }
}

export default NewComp;