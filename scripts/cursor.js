const cursorElement = document.querySelector(`.cursor`);
const cursorFollowElement = document.querySelector(`.cursor_follow`);

let mousePosition = {
  x:-1000,
  y:-1000,
};

const refresh = () => {
  cursorElement.style = `display:block; left:${mousePosition.x}px;top:${mousePosition.y}px;`;
  cursorFollowElement.style = `display:block; left:${mousePosition.x -10}px;top:${mousePosition.y -10}px;`;
  requestAnimationFrame(refresh);
};
refresh();

const handleMove = ({ pageX, pageY }) => {
  mousePosition = { x: pageX, y: pageY - window.pageYOffset };
};

const onMouseEnter = () => {
  cursorElement.classList.add("cursor--hover");
  cursorFollowElement.classList.add("cursor--hover");
};

const onMouseLeave = () => {
  cursorElement.classList.remove("cursor--hover");
  cursorFollowElement.classList.remove("cursor--hover");
};

const onClick = () => {
  cursorElement.classList.add("cursor--click");

  setTimeout(() => {
    cursorElement.classList.remove("cursor--click");
  }, 400);
};

document.addEventListener("click", onClick);

document.addEventListener("mousemove", handleMove);
hoverElement.addEventListener("mouseenter", onMouseEnter);
hoverElement.addEventListener("mouseleave", onMouseLeave);