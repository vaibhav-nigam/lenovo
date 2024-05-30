import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./App.css";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Adjust these values for desired motion effects
    const translateY = scrollY * 2;
    const opacity = Math.min(scrollY / 500, 1); // Gradually fade in as you scroll

    controls.start({
      translateY,
      opacity,
    });
  }, [scrollY, controls]);

  return (
    <div className="App">
      <div className="spacer" />
      <motion.div
        className="orb"
        animate={controls}
        initial={{ translateY: 0, opacity: 0 }}
      />
      <div className="content">
        {/* Your website content goes here */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        {/* ... */}
      </div>
    </div>
  );
}

export default App;
