import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          padding: "10px 15px",
          textAlign: "center",
          fontSize: "20px",
          borderRadius: "50%",
          backgroundColor: "#1A0B2E",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          zIndex: 1000,
        }}
        title="Back to Top"
      >
        <FaArrowUp />
      </button>
    )
  );
};
