import React,{useEffect, useState} from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Career from "./pages/Career";

function App() {
  
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      setCursorPosition({ x, y });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = () => {
      setHovering(true);
    };

    const handleMouseOut = () => {
      setHovering(false);
    };

    // Target elements with the 'btn' class
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
      button.addEventListener('mouseover', handleMouseOver);
      button.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('mouseover', handleMouseOver);
        button.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <>
     <div
        className={`custom-cursor ${isHovering ? "hover-effect" : ""}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </>
  );
}

export default App;
