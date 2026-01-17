// EVENT LISTENERS

//Event listener for hover button states

document.querySelectorAll(".game").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    let heading = card.querySelector("h2");
    let desc = card.querySelector("p");
    heading.classList.add("hidden");
    desc.classList.add("fade-in");
    desc.classList.remove("hidden");
  });
});

document.querySelectorAll(".game").forEach((card) => {
  card.addEventListener("mouseleave", () => {
    let heading = card.querySelector("h2");
    let desc = card.querySelector("p");
    heading.classList.remove("hidden");
    desc.classList.add("hidden");
  });
});
