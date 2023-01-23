import React from "react";
import "./Payment.css";
import { useStateValue } from "../State/StateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
            Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>
        {/* Payment section -delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__tit">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {/* all the products */}
            {basket.map((item) => (
              <CheckoutProduct
                // key={item.key}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment section - payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
