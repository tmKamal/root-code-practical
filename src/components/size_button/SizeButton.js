import React from "react";
import './SizeButton.style.css'
const SizeButton = (props) => {
  return (
    <button onClick={props.clickHandler} type="button" className="btn btn-dark btn-circle btn-sm custom">{props.name}</button> 
  );
};
export default SizeButton;