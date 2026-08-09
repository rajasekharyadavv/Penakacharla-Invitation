const opening = document.getElementById("opening");
const invitation = document.getElementById("invitation");
const flowers = document.getElementById("flowers");
const openButton = document.getElementById("openInvitation");

const flowerSymbols = ["🌸", "🌼", "🌺", "🌷", "❀"];

function createFlowers() {
  flowers.innerHTML = "";

  for (let i = 0; i < 55; i++) {
    const flower = document.createElement("span");
    flower.className = "flower";
    flower.textContent =
      flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (3 + Math.random() * 4) + "s";
    flower.style.animationDelay = Math.random() * 1.5 + "s";
    flower.style.fontSize = (18 + Math.random() * 18) + "px";

    flowers.appendChild(flower);
  }
}

openButton.addEventListener("click", () => {
  createFlowers();
  opening.classList.add("hide");

  setTimeout(() => {
    invitation.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 650);

  setTimeout(() => {
    flowers.innerHTML = "";
  }, 6500);
});
