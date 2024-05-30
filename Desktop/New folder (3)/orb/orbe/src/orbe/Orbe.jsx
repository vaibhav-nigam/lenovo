import React from "react";
import { motion, useAnimation } from "framer-motion";
import "./Orb.css";
import MiniOrbe from "../miniOrbe/MiniOrbe";

function Orb() {
  const controls = useAnimation();

  // Function to handle scroll events
  const handleScroll = () => {
    
    const scrollX = window.scrollY  * -3.0;
    const scrollY = window.scrollY;    
    // Update the animation controls with the new scrollX value
    controls.start({ x: scrollX , y: scrollY });
  };
  
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="spacer" />
      <MiniOrbe/>
      <motion.div
        className="movingDiv"
        animate={controls}
        initial={{ x: 0, y: 0 }}
        transition={{ type: "scroll", stiffness: 50 }}
      />
      
      <div className="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
      </div>
    </div>
  );
}

export default Orb;

