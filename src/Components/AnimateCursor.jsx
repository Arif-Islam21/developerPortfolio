"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const AnimateCursor = ({ isActive }) => {
  const mouce = useRef({ x: 0, y: 0 });
  const circle = useRef();
  const size = isActive ? 400 : 24;

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouceMove);
    return () => {
      window.removeEventListener("mousemove", manageMouceMove);
      window.cancelAnimationFrame(rafId.current);
    };
  }, [isActive]);

  const manageMouceMove = (e) => {
    const { clientX, clientY } = e;
    mouce.current = {
      x: clientX,
      y: clientY,
    };

    MoveCircle(mouce.current.x, mouce.current.y);
  };

  const animate = (e) => {
    const { x, y } = mouce.current;
    const lerp = (x, y, a) => x * (1 - a) + y * a;
    mouce.current = {
      x: lerp(x, mouce.current.x, 0.075),
      y: lerp(y, mouce.current.y, 0.075),
    };

    MoveCircle(mouce.current.x, mouce.current.y);
    rafId.current = window.requestAnimationFrame(animate);
  };

  const MoveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  return (
    <div className="">
      <div
        ref={circle}
        style={{
          backgroundColor: "#BCE4F2",
          width: size,
          height: size,
          filter: `blue(${isActive ? 30 : 0}px)`,
          transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
        }}
        className="top-0 left-0 fixed rounded-full mix-blend-difference pointer-events-none"
      />
    </div>
  );
};

export default AnimateCursor;
