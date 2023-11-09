import React, { useState } from "react";
import "./backToTop.css";

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div style={{ position: "fixed", right: 50, bottom: 40, zIndex: 1000 }}>
      <button
        className="arrow"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      ></button>
    </div>
  );
}

export default BackToTopButton;
