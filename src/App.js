import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import SizeButton from "./components/size_button/SizeButton";
import ClothContainer from "./components/cloth_container/ClothContainer";
import CartIcon from "./components/cart/cart-icon";
import Cart from "./components/cart/cart";
const axios = require("axios");

function App() {
  const [clothsData, setClothData] = useState([]);
  const [clothsType, setClothsType] = useState("all");
  const [clothsSize, setClothsSize] = useState("all");
  const [filteredClothes, setFilteredClothes] = useState([]);
  const sizes = [
    { name: "XS", value: "xsmall" },
    { name: "S", value: "small" },
    { name: "L", value: "large" },
    { name: "ALL", value: "all" },
  ];
  // fetch clothes
  useEffect(() => {
    const fetchClothes = async () => {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments"
        );
        setClothData(response.data);
        setFilteredClothes(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchClothes();
  }, []);

  // filter operations
  useEffect(() => {
    const clothFilterFunc = () => {
      // filter by cloth types
      let clothsByType;
      if (clothsType !== "all") {
        clothsByType = clothsData.filter(
          (cloth) => cloth.details.type === clothsType
        );
      } else {
        clothsByType = clothsData;
      }

      // filter by cloth size
      let clothsBySize;
      if (clothsSize !== "all") {
        clothsBySize = clothsByType.filter(
          (cloth) => cloth.details.size === clothsSize
        );
      } else {
        clothsBySize = clothsByType;
      }

      setFilteredClothes(clothsBySize);
    };
    clothFilterFunc();
    // eslint-disable-next-line
  }, [clothsType, clothsSize]);

  return (
    <React.Fragment>
      <CartIcon pos='main'></CartIcon>
      <Cart></Cart>
      <div className="container-fluid mt-4">
        <div className="row justify-content-md-center">
          <div className="col-md-2">
            <h6>Sizes</h6>
            {sizes.map((size) => (
              <SizeButton
                clickHandler={() => setClothsSize(size.value)}
                key={size.name}
                name={size.name}
              ></SizeButton>
            ))}
          </div>
          <div className="col-md-9">
            <div className="row justify-content-md-end">
              <h6 className="order-txt">Order by</h6>
              <select
                id="lang"
                onChange={(e) => setClothsType(e.target.value)}
                value={clothsType}
                className="form-select mr-4"
                aria-label="Default select example"
              >
                <option value="all">All</option>
                <option value="t-shirt">T-shirt</option>
                <option value="dress shirts">Dress shirts</option>
              </select>
            </div>
            <div className="row">
              {filteredClothes &&
                filteredClothes.map((cloth) => (
                  <ClothContainer key={cloth.id} data={cloth}></ClothContainer>
                ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
