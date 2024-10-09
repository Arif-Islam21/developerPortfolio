"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const AnimateCursor = () => {
  const mouce = useRef({ x: 0, y: 0 });
  const circle = useRef();
  const size = 24;

  const manageMouceMove = (e) => {
    const { clientX, clientY } = e;
    mouce.current = {
      x: clientX,
      y: clientY,
    };

    MoveCircle(mouce.current.x, mouce.current.y);
  };

  const animate = (e) => {
    const { x, y } = delayedMouse.current;
    delayedMouse.current = {
      x: lerp(x, mouce.current.x, 0.075),
      y: lerp(y, mouce.current.y, 0.075),
    };

    MoveCircle(delayedMouse.current.x, delayedMouse.current.y);
    rafId.current = window.requestAnimationFrame(animate);
  };

  const MoveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouceMove);
    return () => {
      window.removeEventListener("mousemove", manageMouceMove);
    };
  }, []);

  return (
    <div className="">
      <div
        ref={circle}
        style={{ backgroundColor: "#BCE4F2", width: size, height: size }}
        className="top-0 left-0 fixed rounded-full"
      />
    </div>
  );
};

export default AnimateCursor;
