import React from "react";
import "./ClothContainer.style.css";
import { useDispatch } from 'react-redux';
import {addToCart} from '../../redux/actions/cart-actions'
const ClothContainer = (props) => {
    const dispatch = useDispatch();
  return (
    <div className="col-md-3 cloth-container">
      <div className="row">
        <div className="col-md-12">
          <img
            src={props.data.details.image}
            style={{ width: "100%", height: "auto" }}
            class="rounded float-start"
            alt={props.data.name}
          ></img>
        </div>
        <div className="col-md-12">{props.data.name}</div>
        <div className="col-md-12">
          <div className="row justify-content-md-center">
            <div className="col-md-4 btmBar"></div>
          </div>
        </div>
        <div className="col-md-12 al-center">$ {props.data.details.price}</div>
        <div className="col-md-12 al-center btm-btn">
          <button onClick={() => dispatch(addToCart(props.data))}  class="btn btn-dark btn-block" type="submit">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClothContainer;
