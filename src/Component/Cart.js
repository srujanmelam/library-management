import { connect } from "react-redux";
import { useEffect, useState } from "react";

const Cart = ({ cart }) => {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.count;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return <div>Your cart = [{cartCount}]</div>;
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
  };
};

export default connect(mapStateToProps)(Cart);
