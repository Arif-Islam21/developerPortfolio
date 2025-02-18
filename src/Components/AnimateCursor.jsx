import React, { useEffect, useState } from "react";

const AnimateCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mainCursor = document.getElementById("main-cursor");
    const trailCursors = Array.from(
      document.getElementsByClassName("trail-cursor")
    );

    if (!mainCursor || trailCursors.length === 0) {
      console.error("Cursor elements not found!");
      return;
    }

    const mouseMoveHandler = (e) => {
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });
    };

    // Add mousemove event listener
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        id="main-cursor"
        className="fixed top-0 left-0 w-8 h-8 bg-[#32CC91] rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${position.x - 16}px, ${
            position.y - 16
          }px, 0)`,
          boxShadow: "0 0 20px 5px rgba(34, 197, 94, 0.5)",
        }}
      ></div>

      {/* Trail cursors */}
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="trail-cursor fixed top-0 left-0 rounded-full pointer-events-none z-40 mix-blend-difference transition-all duration-500 ease-out"
          style={{
            width: `${8 - index * 0.5}px`,
            height: `${8 - index * 0.5}px`,
            backgroundColor: `rgba(34, 197, 94, ${1 - index * 0.1})`,
            transform: `translate3d(${position.x - (8 - index * 0.5) / 2}px, ${
              position.y - (8 - index * 0.5) / 2
            }px, 0)`,
            transitionDelay: `${index * 30}ms`,
          }}
        ></div>
      ))}
    </>
  );
};

export default AnimateCursor;
