import React, { useEffect } from "react";

const AnimateCursor = () => {
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

      // Move the main cursor instantly
      mainCursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      // Move trail cursors with a delay
      trailCursors.forEach((trail, index) => {
        const delay = (index + 1) * 50; // Increase delay for each trail
        setTimeout(() => {
          trail.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }, delay);
      });
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
        className="fixed top-0 left-0 w-4 h-4 bg-green-600 rounded-full pointer-events-none z-50 opacity-100 transition-transform duration-75 ease-linear"
      ></div>

      {/* Trail cursors */}
      {[...Array(25)].map((_, index) => (
        <div
          key={index}
          className="trail-cursor fixed top-0 left-0 w-4 h-4 bg-green-600 rounded-full pointer-events-none z-40 opacity-50 transition-transform duration-500 ease-linear"
        ></div>
      ))}
    </>
  );
};

export default AnimateCursor;
