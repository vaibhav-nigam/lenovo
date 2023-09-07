import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./side.css";

function Side() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const xPosition = -scrollY*-2; // Adjust the multiplier for the desired diagonal effect
  const xPosition2 = -scrollX*-1.6;

  return (
    <div className="App">
      <motion.div
        className="movingDiv"
        initial={{ x: 0 }}
        style={{ x: xPosition }}
      />
      <motion.div
        className="movingDiv"
        initial={{ x: 0 }}
        style={{ x: xPosition2 }}
      />
      <motion.div
        className="movingDiv"
        initial={{ x: 20 }}
        style={{ x: xPosition }}
      />
      <motion.div
        className="movingDiv"
        initial={{ x: 40 }}
        style={{ x: xPosition }}
      />
    </div>
  );
}

export default Side;
