const MAP_URL = "https://maps.app.goo.gl/BArafqBBwV4gQR4j6?g_st=ac";

const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const card = document.getElementById("card");
const petals = document.getElementById("petals");
const mapBtn = document.getElementById("mapBtn");

function createPetals(count = 45) {
  const symbols = ["🌸", "🌺", "✿", "❀"];

  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");

    petal.className = "petal";
    petal.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = 14 + Math.random() * 16 + "px";
    petal.style.animationDuration = 3.5 + Math.random() * 3.5 + "s";
    petal.style.animationDelay = Math.random() * 1.5 + "s";

    petal.style.setProperty(
      "--drift",
      (Math.random() - 0.5) * 180 + "px"
    );

    petals.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 9000);
  }
}

openBtn.addEventListener("click", () => {
  createPetals();

  welcome.classList.add("hidden");

  card.classList.remove("hidden");
  card.classList.add("fade-in");
});

mapBtn.addEventListener("click", () => {
  window.open(MAP_URL, "_blank", "noopener,noreferrer");
});
