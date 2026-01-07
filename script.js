let dragged;

document.querySelectorAll(".grid div").forEach(div => {

  div.addEventListener("dragstart", e => {
    dragged = e.target;
    e.dataTransfer.setData("text/plain", ""); // Required for Firefox
    e.target.classList.add("dragging");
  });

  div.addEventListener("dragend", e => {
    e.target.classList.remove("dragging");
  });

  div.addEventListener("dragover", e => {
    e.preventDefault(); // Allow drop
  });

  div.addEventListener("drop", e => {
    e.preventDefault();
    if (dragged === e.target) return;

    // Swap the entire innerHTML of divs
    const tempContent = dragged.innerHTML;
    dragged.innerHTML = e.target.innerHTML;
    e.target.innerHTML = tempContent;

    // Swap background images (in case they are set via CSS)
    const tempBg = dragged.style.backgroundImage;
    dragged.style.backgroundImage = e.target.style.backgroundImage;
    e.target.style.backgroundImage = tempBg;

    // Swap alt attributes
    const tempAlt = dragged.getAttribute("alt");
    dragged.setAttribute("alt", e.target.getAttribute("alt"));
    e.target.setAttribute("alt", tempAlt);
  });

});
