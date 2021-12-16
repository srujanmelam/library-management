import { actionTypes } from "./reducers/CartReducer";
import store from "./store";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import './css/CartProduct.css';
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
    <div className="card"><br></br><br></br>
      <div className="card-body">
        <table className="t1">
          <tr>
            <th> <label>Title :{item.title}</label> </th>
            <th> <label>Author :{item.author}</label> </th>
            <th> <label>ISBN :{item.ISBN} </label> </th>
            <th><label>Publication :{item.publication}</label></th>
          </tr>
        </table>
       <br/>
       
        {location.pathname === "/cart" && (
          <span>
            <table className="t">
              <tr>
              <th><input type="number" value={qty} min='0' onChange={(e) => setQty(e.target.value)}/></th>
              <th> <button className="btn" onClick={changeQuantity}>
              <b>Change</b>
            </button>
                 <button className="btn1" onClick={deleteFromCart}>
              <b>Delete from Cart</b>
            </button></th>
                
               
              </tr>
            </table>
            
           
           
          </span>
        )}
      </div>
    </div>
  );
};


export default CartProduct;
