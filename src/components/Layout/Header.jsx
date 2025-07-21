import { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { IoMdClose } from "react-icons/io";
import { IoClose, IoReorderThreeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../UI/ProductContext";

export const Header = () => {
  // cart
  const { cart } = useContext(ProductsContext);

  const [showMenu, setShowMenu] = useState(false);
  const handleButtonToggle = () => {
    setShowMenu(!showMenu);
  };

  // sum up all item quantities
  // const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalItems = cart.length;

  // console.log(cart);
  // console.log(totalItems);

  return (
    <header className="container nav-container">
      {/* logo */}
      <div className="logo">
        <h1>fakeStore</h1>
      </div>

      {/* search bar */}
      {/* <form className="search-form">
        <input type="text" placeholder="Search Here" className="nav-search" />
        <FaMagnifyingGlass />
      </form> */}

      {/* nav items */}
      <div className="nav-menu">
        <nav className={showMenu ? "menu-mobile" : "menu-web"}>
          <ul>
            <li>
              <NavLink to="/" onClick={handleButtonToggle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleButtonToggle}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={handleButtonToggle}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleButtonToggle}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* add to cart button */}
        <button className="add">
          <NavLink to="/cart" className="cart-link">
            <FaShoppingCart /> <span>0</span>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </NavLink>
        </button>

        {/* show or hide icon */}
        <div className="menu-icon" onClick={handleButtonToggle}>
          {showMenu ? <IoClose /> : <IoReorderThreeOutline />}
        </div>
      </div>
    </header>
  );
};
