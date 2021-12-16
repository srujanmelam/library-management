import { actionTypes } from "./reducers/CartReducer";
import store from "./store";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const CartProduct = ({ item }) => {

  const location = useLocation();
  const [qty, setQty] = useState(item.count);

  const deleteFromCart = () => {
    const action = {
      type: actionTypes.DELETE_FROM_CART,
      payload: {
        item: item,
      },
    };
    store.dispatch(action);
  };

  const changeQuantity = () => {
    const action = {
      type: actionTypes.CHANGE_QUANTITY,
      payload: {
        item: {
          ...item,
          count: parseInt(qty),
        },
      },
    };
    store.dispatch(action);
  };
  
  return (
    <div className="card">
      <div className="card-body">
        <label>Title :{item.title}</label><br/>
        <label>Author :{item.author}</label><br/>
        <label>ISBN :{item.isbn}</label><br/>
        <label>Publication :{item.publication}</label><br/>
        {location.pathname === "/cart" && (
          <span>
            <input type="number" value={qty} min='0' onChange={(e) => setQty(e.target.value)}/>
            <button className="btn" onClick={changeQuantity}>
              Change
            </button>
            <button className="btn" onClick={deleteFromCart}>
              Delete from Cart
            </button>
          </span>
        )}
      </div>
    </div>
  );
};


export default CartProduct;
