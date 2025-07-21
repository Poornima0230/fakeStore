import { ProductsContext } from "../components/UI/ProductContext";
import { useContext, useEffect, useState } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";

import { FaMagnifyingGlass } from "react-icons/fa6";

import axios from "axios";
import { BiLoader } from "react-icons/bi";

export const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  const {
    // products,
    // setProducts,
    handleAddToCart,
    quantity,
    increment,
    decrement,
    toastMessage,
  } = useContext(ProductsContext);

  // search
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // fetch all products initially
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");

        setAllProducts(res.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    if (allProducts.length === 0) {
      fetchAllProducts();
    }
  }, []);

  // handle searchInput change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  // filter products by title
  const filterProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="container prod-container">
      {/* search input */}
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Search products"
          className="prod-search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <FaMagnifyingGlass className="search-icon" />
      </form>

      {/* show no results found */}
      {filterProducts.length === 0 && <BiLoader />}

      {/* product cards */}
      {filterProducts.map((curProd) => {
        const { category, thumbnail, title, description, price, stock, id } =
          curProd;

        return (
          <div className="homeProductCard" key={id} data-aos="fade-up">
            <div className="category">
              <h4>{category}</h4>
            </div>
            <img src={thumbnail} alt={title} loading="lazy" />
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
              <div className="quantity">
                <h2>
                  <b>Price:</b> ₹{price} &nbsp;&nbsp;
                  <span className="strike">
                    ₹{(Number(price) * 3).toFixed(2)}
                  </span>
                </h2>
              </div>
              <div className="stock">
                <h2>
                  Total Stock Available: <span>{stock}</span>
                </h2>
              </div>

              {/* quantity */}
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

            {/* add to cart */}
            <button
              className="addToCart-button"
              onClick={() => {
                handleAddToCart(curProd);
              }}
            >
              <FaShoppingCart />
              <span>Add To Cart</span>
            </button>

            {toastMessage && <div className="custom-toast">{toastMessage}</div>}
          </div>
        );
      })}
    </section>
  );
};
