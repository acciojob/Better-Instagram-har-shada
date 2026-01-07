let dragged;

document.querySelectorAll(".grid div").forEach(div => {

  div.addEventListener("dragstart", e => {
    dragged = e.target;
    e.target.classList.add("dragging");
  });

  div.addEventListener("dragend", e => {
    e.target.classList.remove("dragging");
  });

  div.addEventListener("dragover", e => {
    e.preventDefault();
  });

  div.addEventListener("drop", e => {
    e.preventDefault();
    if (dragged === e.target) return;

    // Swap background images
    const tempBg = dragged.style.backgroundImage;
    dragged.style.backgroundImage = e.target.style.backgroundImage;
    e.target.style.backgroundImage = tempBg;

    // Swap alt text
    const tempAlt = dragged.getAttribute("alt");
     e.target.setAttribute("alt", tempAlt);
