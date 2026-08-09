const opening = document.getElementById("opening");
const invitation = document.getElementById("invitation");
const flowers = document.getElementById("flowers");
const cardFlowers = document.getElementById("cardFlowers");
const openButton = document.getElementById("openInvitation");
const flowerButton = document.getElementById("flowerButton");

const flowerSymbols = ["🌸", "🌼", "🌺", "🌷", "❀"];

function createFlowers() {
  flowers.innerHTML = "";

  for (let i = 0; i < 85; i++) {
    const flower = document.createElement("span");
    flower.className = "flower";
    flower.textContent =
      flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (3.5 + Math.random() * 4.5) + "s";
    flower.style.animationDelay = Math.random() * 1.8 + "s";
    flower.style.fontSize = (18 + Math.random() * 20) + "px";

    flowers.appendChild(flower);
  }

  setTimeout(() => {
    flowers.innerHTML = "";
  }, 8500);
}

openButton.addEventListener("click", () => {
  // Start the full-screen flower shower immediately.
  createFlowers();

  // Hide the opening screen.
  opening.classList.add("hide");

  // Reveal the invitation after the flowers have started falling.
  setTimeout(() => {
    invitation.classList.remove("hidden");
    flowerButton.classList.add("show", "pulse");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 900);

  // Keep flowers visible long enough to cover the reveal.
  setTimeout(() => {
    flowers.innerHTML = "";
  }, 9000);
});


// Tap the bottom-right flower circle to create another full-screen flower shower.
flowerButton.addEventListener("click", () => {
  flowerButton.classList.remove("pulse");
  void flowerButton.offsetWidth;
  flowerButton.classList.add("pulse");
  createFlowers();
});
