const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');
const letterText = document.getElementById('letterText');
const music = document.getElementById('birthdayMusic');

// Teks ucapan muncul satu per satu
const message = "🎉 Selamat ulang tahun! Semoga hari-harimu selalu penuh kebahagiaan, cinta, dan tawa! 🎂";
let index = 0;

function typeLetter() {
    if(index < message.length) {
        letterText.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeLetter, 50);
    }
}

// Confetti
function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        confetti.style.animationDuration = 2 + Math.random()*3 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Fireworks canvas
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(x, y) {
    for(let i=0; i<50; i++){
        particles.push({
            x: x,
            y: y,
            vx: Math.random()*4-2,
            vy: Math.random()*-4-1,
            alpha: 1,
            color: `hsl(${Math.random()*360}, 100%, 50%)`,
            size: 2
        });
    }
}

function updateFireworks() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(let i=particles.length-1; i>=0; i--){
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.alpha -= 0.02;
        if(p.alpha <= 0) particles.splice(i,1);
        else {
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
            ctx.fill();
        }
    }
    requestAnimationFrame(updateFireworks);
}
updateFireworks();

// Open envelope
openBtn.addEventListener('click', () => {
    envelope.classList.add('open');
    typeLetter();
    launchConfetti();
    music.play();
    createFirework(window.innerWidth/2, window.innerHeight/2);
});
