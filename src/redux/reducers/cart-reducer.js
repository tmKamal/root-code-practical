import { addItemToCart } from "../utils/cart-utils";

const initialState = {
  cartItems: [],
  hidden: true,
};
const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TOGGLE_CART":
      console.log(state.hidden ? "true" : "false");
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};
export default CartReducer;
