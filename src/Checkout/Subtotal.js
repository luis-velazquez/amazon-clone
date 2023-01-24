import React from "react";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "../State/reducer";
import { useStateValue } from "../State/StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  //     const numberFormat = () => {
  //        return
  //     }

  return (
    <div className="subtotal">
      {/* This updates the total amount */}
      <p>
        Subtotal ({basket.length} items): <strong>{getBasketTotal(basket)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" className="subtotal__gift" />
        This Order contains a gift
      </small>
      {/* video 1:54:29 */}
      <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>

  );
}

export default Subtotal;
