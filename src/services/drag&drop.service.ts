import throttle from "./throttle.service";

export default function startMove(e) {
  e.preventDefault();
  const startX = e.clientX;
  const startY = e.clientY;

  const ticketEL = e.target;

  const dragItem = throttle((e) => {
    const x = e.clientX;
    const y = e.clientY;
    ticketEL.style.top = y - startY + "px";
    ticketEL.style.left = x - startX + "px";
  }, 10);

  function dropItem(e) {
    const x = e.clientX;
    const y = e.clientY;
    ticketEL.style.top = 0;
    ticketEL.style.left = 0;
    document.removeEventListener("pointermove", dragItem);
    document.removeEventListener("pointerup", dropItem);
  }

  document.addEventListener("pointermove", dragItem);
  document.addEventListener("pointerup", dropItem);
}
