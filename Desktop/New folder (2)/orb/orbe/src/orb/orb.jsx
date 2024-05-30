import React from "react";
import { motion, useAnimation } from "framer-motion";
import "./orb.css";

function Orb() {
  const controls = useAnimation();
    console.log(window.screen.width)
  // Function to handle scroll events
  let scrollX 
  const handleScroll = () => {
    // Calculate the distance to move the div based on the scroll position
    if(window.screen.width < 1500){
        scrollX = window.scrollY*-5.5;
    }else{
        scrollX = window.scrollY*+5.5;
    }
    //const scrollX = (window.screen.width < 200px)  window.scrollY *-5.5 : window.scrollY*5.5;
    const scrollY = window.scrollY;
    

    // Update the animation controls with the new scrollX value
    controls.start({ x: scrollX , y: scrollY });
    
  };
  React.useEffect(() => {console.log(scrollX)}, [scrollX]);

  // Attach the scroll event listener
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="spacer" />
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
