import { FaHeadset, FaShippingFast } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { GiReceiveMoney } from "react-icons/gi";
import guarantee from "../api/garantee.json";
export const Shipping = () => {
  const shipIcon = {
    FaShippingFast: <FaShippingFast />,
    LuRefreshCw: <LuRefreshCw />,
    GiReceiveMoney: <GiReceiveMoney />,
    FaHeadset: <FaHeadset />,
  };

  return (
    <section
      className="container shipping-container"
      style={{ marginBottom: "3rem" }}
      data-aos="fade-up"
    >
      {guarantee.map((curItem, index) => {
        const { icon, one, two } = curItem;
        console.log(icon);
        // console.log(shipIcon[icon]);

        return (
          <div className="hero-shipping" key={index}>
            <span className="icon">{shipIcon[icon] || <FaShippingFast />}</span>

            <h3>{one}</h3>
            <h4>{two}</h4>
          </div>
        );
      })}
    </section>
  );
};
