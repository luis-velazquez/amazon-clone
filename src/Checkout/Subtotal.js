import React from "react";
import "./Subtotal.css";

function Subtotal() {
  //     const numberFormat = () => {
  //        return
  //     }

  return (
    <div className="subtotal">
      <p>
        Subtotal (0 items) <strong>0</strong>
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
