// after clicking on show now button on home page

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaShoppingCart, FaStar } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { ProductsContext } from "./ProductContext";

export const DetailedProd = () => {
  const {
    products,
    setProducts,
    handleAddToCart,
    quantity,
    increment,
    decrement,
    toastMessage,
  } = useContext(ProductsContext);

  const { category } = useParams();

  const [localProducts, setLocalProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res;
        if (!category || category === "all") {
          // all products
          res = await axios.get(`https://dummyjson.com/products`);
        } else {
          // products by category
          res = await axios.get(
            `https://dummyjson.com/products/search?q=${category}`
          );
        }
        setLocalProducts(res.data.products);

        setProducts(res.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [category]);
  return (
    <section className="container prod-container">
      {localProducts.length === 0 ? (
        <p>No product found.</p>
      ) : (
        products.map((curProd, index) => {
          const { category, id, thumbnail, title, description, price, stock } =
            curProd;
          return (
            <div className="homeProductCard" key={index}>
              <div className="category" key={index}>
                <h4>{category}</h4>
              </div>
              <img src={thumbnail} alt={title} />
              <h1 className="home-productName">{title}</h1>
              <div className="star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="home-description">
                <h2>{description}</h2>
              </div>
              <div className="price">
                <h2>
                  <b>Price:</b> ₹ {price} &nbsp;&nbsp;
                  <span className="strike ">
                    {" "}
                    ₹ {(Number(price) * 3).toFixed(2)}
                  </span>
                </h2>
              </div>
              <div className="stock">
                <h2>
                  Total Stock Available: <span>{stock}</span>
                </h2>
              </div>
              <div className="quantity">
                <h2>Quantity(Pieces) </h2>
                <div className="qun-btn">
                  <button
                    className="increment"
                    onClick={() => increment(id, stock)}
                    disabled={quantity[id] >= stock}
                  >
                    +
                  </button>
                  <div className="qun">{quantity[id] || 1}</div>
                  <button className="decrement" onClick={() => decrement(id)}>
                    -
                  </button>
                </div>
              </div>
              <div className="button">
                <button
                  className="addToCart-button"
                  onClick={() => {
                    handleAddToCart(curProd);
                  }}
                >
                  <FaShoppingCart />
                  <span>Add To Cart </span>
                </button>
              </div>
              {toastMessage && (
                <div className="custom-toast">{toastMessage}</div>
              )}
            </div>
          );
        })
      )}
    </section>
  );
};
