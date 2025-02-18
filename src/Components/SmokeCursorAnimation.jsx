import "./style.css";

const SmokeCursorAnimation = () => {
  const smoke = document.getElementById("smoke");
  const createSmoke = (e) => {
    const elem = document.createElement("div");
    elem.classList.add = "smoke-element";
    elem.style.left = `${e.pageX}px`;
    elem.style.top = `${e.pageY}px`;
    smoke.appendChild(elem);

    elem.addEventListener("animationend", () => {
      elem.remove();
    });
  };

  document.addEventListener("mousemove", createSmoke);

  return <div id="smoke"></div>;
};

export default SmokeCursorAnimation;
