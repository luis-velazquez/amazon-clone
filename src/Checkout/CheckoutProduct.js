import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../State/StateProvider";

function CheckoutProduct(id, image, title, price, rating) {
    const [{ basket}, dispatch] = useStateValue()
    const removeFromBasket =( ) => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
        })
    }
    
    return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐️</p>
              ))}
          </div>
          <button onClick={removeFromBasket}>remove from basket</button>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
