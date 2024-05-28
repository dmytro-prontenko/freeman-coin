import React, { useState, useEffect } from "react";
import { Button, LinkToTop } from "./ScrollButton.styled.js";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <LinkToTop to="header" smooth={true} duration={500} $isVisible={isVisible}>
      <Button>
        <img src={"/icon/fav2.webp"} alt={"icon"} />
      </Button>
    </LinkToTop>
  );
};

export default ScrollToTopButton;
