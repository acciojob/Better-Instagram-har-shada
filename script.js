let dragged;

document.querySelectorAll(".grid div").forEach(div => {

  // Start dragging
  div.addEventListener("dragstart", e => {
    dragged = e.target;
    e.dataTransfer.setData("text/plain", ""); // Required for Firefox & Cypress
    e.target.classList.add("dragging");
  });

  // End dragging
  div.addEventListener("dragend", e => {
    e.target.classList.remove("dragging");
  });

  // Allow drop
  div.addEventListener("dragover", e => {
    e.preventDefault();
  });

  // Handle drop
  div.addEventListener("drop", e => {
    e.preventDefault();
    if (dragged === e.target) return; // Prevent swapping with self

    // Swap background images
    const tempBg = dragged.style.backgroundImage;
    dragged.style.backgroundImage = e.target.style.backgroundImage;
    e.target.style.backgroundImage = tempBg;

    // Swap alt attributes
    const tempAlt = dragged.getAttribute("alt");
    dragged.setAttribute("alt", e.target.getAttribute("alt"));
    e.target.setAttribute("alt", tempAlt);
  });

});

