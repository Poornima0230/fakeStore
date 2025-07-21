import { useContext } from "react";
import { ProductsContext } from "../UI/ProductContext";

export const Cart = () => {
  const { cart, quantity, increment, decrement, removeFromCart } =
    useContext(ProductsContext);
  return (
    <div className="cart-page container">
      {/* <h2>Your Cart</h2> */}
      {cart.length === 0 ? (
        <p className="no-cart">Cart not yet</p>
      ) : (
        <div className="cartItem container" data-aos="fade-up">
          {cart.map((item) => {
            const { id, title, price, thumbnail, stock, category } = item;
            return (
              <div className="cartProductCard" key={item.id}>
                <div className="category">
                  <h4>{category}</h4>
                </div>

                <img src={thumbnail} alt={title} loading="lazy" />

                <h1 className="home-productName">{title}</h1>

                <div className="price">
                  <h2> ₹{price} </h2>
                </div>

                {/* Quantity */}
                {/* <h2>Quantity (Pieces)</h2> */}
                <div className="qun-btn-cart">
                  <button
                    className="increment"
                    onClick={() => increment(id, stock)}
                    disabled={quantity[id] >= stock}
                  >
                    +
                  </button>
                  <div className="qun">{quantity[id] || 1}</div>
                  <button
                    className="decrement"
                    onClick={() => decrement(id)}
                    // disabled={quantity[id] <= 1}
                  >
                    -
                  </button>
                </div>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  <span>Remove </span>
                </button>

                {/* Add to Cart */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
