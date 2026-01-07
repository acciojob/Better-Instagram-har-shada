//your code here
let dragged;

document.querySelectorAll(".grid div").forEach(div => {
  
  // Drag start
  div.addEventListener("dragstart", e => {
    dragged = e.target;
    e.target.classList.add("dragging");
  });

  // Drag end
  div.addEventListener("dragend", e => {
    e.target.classList.remove("dragging");
  });

  // Drag over
  div.addEventListener("dragover", e => {
    e.preventDefault(); // Necessary to allow drop
  });

  // Drop
  div.addEventListener("drop", e => {
    e.preventDefault();
    if (dragged === e.target) return; // Prevent swapping with itself
    
    // Swap background images
    const tempBg = dragged.style.backgroundImage;
    dragged.style.backgroundImage = e.target.style.backgroundImage;
    e.target.style.backgroundImage = tempBg;
  });

});