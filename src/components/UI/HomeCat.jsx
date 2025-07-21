import { NavLink } from "react-router-dom";
import heroCat from "../api/cat.json";

export const HomeCat = () => {
  return (
    <>
      <section
        className="container grid grid-three--cols"
        style={{ marginBottom: "3.5rem" }}
        data-aos="fade-up"
      >
        {heroCat.map((curItem, index) => {
          const { img, discount, category } = curItem;

          return (
            <div className="cat-box" key={index}>
              <img src={img} alt="img not found" />
              <h3>{discount}</h3>
              <NavLink to={`/products/${category}`}>
                <u>Shop Now</u>
              </NavLink>
            </div>
          );
        })}
      </section>
    </>
  );
};
