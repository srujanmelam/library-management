import { connect } from "react-redux";
import Cart from "./Cart"
import CartProduct from "./CartProduct";

function ShowCart({cart}) {

  return(
    <div>
      <Cart/>
      {cart.map((item,id)=>{
        return (<CartProduct item={item} key={id}/>);
        })
      }
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
  };
};

export default connect(mapStateToProps)(ShowCart);
