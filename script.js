/* =========================
   JavaScript - Animasi Interaktif
   ========================= */

// Ambil elemen bunga & kupu-kupu
const petals = document.querySelectorAll(".petal");
const center = document.querySelector(".center");
const flower = document.querySelector(".flower");
const butterflies = document.querySelectorAll(".butterfly");

// Fungsi untuk reset animasi mekar bunga
function resetFlower() {
  petals.forEach((petal, i) => {
    petal.style.animation = "none";
    void petal.offsetWidth; // trik reset animasi
    petal.style.animation = `bloom 2s forwards`;
    petal.style.animationDelay = `${0.5 + i * 0.2}s`;
  });

  center.style.animation = "none";
  void center.offsetWidth;
  center.style.animation = `centerBloom 2s forwards 1.7s`;
}

// Event: klik pada bunga untuk mekar ulang
flower.addEventListener("click", () => {
  resetFlower();
});

// ------------------------------
// Animasi kupu-kupu terbang random
// ------------------------------
function randomFly(butterfly) {
  const x = Math.random() * window.innerWidth - 100;
  const y = Math.random() * -200 - 50;
  const duration = 10 + Math.random() * 5;

  butterfly.animate(
    [
      { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
      { transform: `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg)`, opacity: 0.8 }
    ],
    {
      duration: duration * 1000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out"
    }
  );
}

butterflies.forEach(b => randomFly(b));

// ------------------------------
// Bintang kelap-kelip dinamis
// ------------------------------
const starContainer = document.querySelector(".stars");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.position = "absolute";
  star.style.width = "2px";
  star.style.height = "2px";
  star.style.background = "#fff";
  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.opacity = Math.random();
  starContainer.appendChild(star);

  // Animasi kelap-kelip
  star.animate(
    [
      { opacity: 0 },
      { opacity: 1 },
      { opacity: 0.2 }
    ],
    {
      duration: 2000 + Math.random() * 3000,
      iterations: Infinity,
      direction: "alternate",
      easing: "ease-in-out"
    }
  );
}

// Tambahkan banyak bintang
for (let i = 0; i < 80; i++) {
  createStar();
                        }
