import React from "react";
import { getBasketTotal } from "../State/reducer";
import { useStateValue } from "../State/StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  //     const numberFormat = () => {
  //        return
  //     }

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>{getBasketTotal(basket)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" className="subtotal__gift" />
        This Order contains a gift
      </small>
      {/* video 1:54:29 */}
      <button>Proceed to Checkout</button>
    </div>

  );
}

export default Subtotal;
