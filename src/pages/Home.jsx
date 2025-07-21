import { NavLink } from "react-router-dom";
import { HomeCat } from "../components/UI/HomeCat";
import { Shipping } from "../components/UI/Shipping";
// import { useEffect } from "react";

export const Home = () => {
  return (
    <>
      <section className="container grid grid-two--cols hero-container">
        <div className="hero-content" data-aos="fade-up">
          <h1>Capture Every Moment in stunning Details</h1>
          <h3>
            Discover premium Cameras and Lenses for every photographer - from
            beginners to pros
          </h3>
          <button className="shopNow">
            <NavLink to={"/products"}> Shop Now</NavLink>
          </button>
        </div>
      </section>
      <HomeCat />
      <Shipping />
    </>
  );
};
