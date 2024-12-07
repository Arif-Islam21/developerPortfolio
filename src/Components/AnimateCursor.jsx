// "use client";
// import gsap from "gsap";
// import React, { useEffect, useRef } from "react";

// import { useEffect } from "react";

// const AnimateCursor = ({ isActive }) => {
//   const mouce = useRef({ x: 0, y: 0 });
//   const circle = useRef();
//   const size = isActive ? 400 : 24;

//   useEffect(() => {
//     animate();
//     window.addEventListener("mousemove", manageMouceMove);
//     return () => {
//       window.removeEventListener("mousemove", manageMouceMove);
//       window.cancelAnimationFrame(rafId.current);
//     };
//   }, [isActive]);

//   const manageMouceMove = (e) => {
//     const { clientX, clientY } = e;
//     mouce.current = {
//       x: clientX,
//       y: clientY,
//     };

//     MoveCircle(mouce.current.x, mouce.current.y);
//   };

//   const animate = (e) => {
//     const { x, y } = mouce.current;
//     const lerp = (x, y, a) => x * (1 - a) + y * a;
//     mouce.current = {
//       x: lerp(x, mouce.current.x, 0.075),
//       y: lerp(y, mouce.current.y, 0.075),
//     };

//     MoveCircle(mouce.current.x, mouce.current.y);
//     rafId.current = window.requestAnimationFrame(animate);
//   };

//   const MoveCircle = (x, y) => {
//     gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
//   };

//   return (
//     <div className="">
//       <div
//         ref={circle}
//         style={{
//           backgroundColor: "#BCE4F2",
//           width: size,
//           height: size,
//           filter: `blue(${isActive ? 30 : 0}px)`,
//           transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
//         }}
//         className="top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none"
//       />
//     </div>
//   );
// };

// export default AnimateCursor;

// const AnimateCursor = () => {
//   useEffect(() => {
//     const cursor = document.getElementById("neon-cursor");

//     document.addEventListener("mousemove", (e) => {
//       const { clientX: x, clientY: y } = e;
//       cursor.style.transform = `translate(${x}px, ${y}px)`;
//     });

//     document.addEventListener("mouseleave", () => {
//       cursor.style.opacity = "0"; // Fade out when the cursor leaves the window
//     });

//     document.addEventListener("mouseenter", () => {
//       cursor.style.opacity = "1"; // Fade in when the cursor re-enters the window
//     });

//     // trail effect
//     document.addEventListener("mousemove", (e) => {
//       const { clientX: x, clientY: y } = e;

//       // Create a new trail element
//       const trail = document.createElement("div");
//       trail.className =
//         "fixed w-4 h-4 bg-pink-500 rounded-full pointer-events-none opacity-80";
//       trail.style.transform = `translate(${x}px, ${y}px)`;
//       trail.style.boxShadow =
//         "0 0 15px rgba(255, 0, 150, 0.7), 0 0 25px rgba(255, 0, 150, 0.4)";
//       trail.style.transition = "opacity 0.3s ease-out";

//       // Append the trail to the body
//       document.body.appendChild(trail);

//       // Remove the trail after animation
//       setTimeout(() => {
//         trail.style.opacity = "0";
//         setTimeout(() => trail.remove(), 300);
//       }, 100);
//     });
//   }, []);

//   return <div id="neon-cursor"></div>;
// };

// export default AnimateCursor;

// import React, { useEffect } from "react";

// const AnimateCursor = () => {
//   useEffect(() => {
//     // Fetch the cursor element
//     const cursor = document.getElementById("neon-cursor");
//     const trailCursors = Array.from(
//       document.getElementsByClassName("trail-cursor")
//     );

//     if (!cursor) {
//       console.error("Cursor element not found!");
//       return;
//     }

//     // Move the cursor based on mouse movement
//     const moveCursor = (e) => {
//       const { clientX: x, clientY: y } = e;
//       cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;

//       trailCursors.forEach((trail, idx) => {
//         const delay = (idx + 1) * 50;
//         setTimeout(() => {
//           trail.style.transform = `translate3d${x}px, ${y}px`;
//         }, delay);
//       });
//     };

//     // Attach mouse events
//     document.addEventListener("mousemove", moveCursor);

//     // Cleanup on unmount
//     return () => {
//       document.removeEventListener("mousemove", moveCursor);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         id="neon-cursor"
//         className="fixed top-0 left-0 w-4 h-4 bg-pink-500 rounded-full pointer-events-none z-50 opacity-100 transition-all duration-200 ease-linear"
//       ></div>
//       {[...Array(5)].map((_, index) => (
//         <div
//           key={index}
//           className="trail-cursor fixed top-0 left-0 w-4 h-4 bg-pink-500 rounded-full pointer-events-none z-40 opacity-50 transition-transform duration-500 ease-linear"
//         ></div>
//       ))}
//     </>
//   );
// };

// export default AnimateCursor;

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
