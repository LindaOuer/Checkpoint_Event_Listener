import React, { Component } from "react";

const Box = {
  marginTop: "10em",
  width: "300px",
  height: "500px",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const ImageStyle = {
  border: "3px solid black",
  objectFit: "scale-down"
};

const level1 = {
  color: "white",
  fontSize: "30px",
  backgroundColor: "rgba(14, 14, 14, 1.5)"
};

const level2 = {
  color: "grey",
  fontSize: "20px",
  textTransform: "uppercase",
  fontStyle: "italic",
  fontWeight: "bold"
};

class IdBox extends Component {
  render() {
    return (
      <div style={Box}>
        <img src={this.props.image} alt="" style={ImageStyle} />
        <p style={{ transform: "rotate(-20deg)" }}>
          <span style={level1}>{this.props.name}</span>
        </p>
        <p style={level2}>{this.props.message}</p>
      </div>
    );
  }
}
export default IdBox;
