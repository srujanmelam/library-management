import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Cart = ({ cart }) => {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.count;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  return <div className="car"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon><span className="n"><b>({cartCount})</b></span></div>;
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
  };
};

export default connect(mapStateToProps)(Cart);
