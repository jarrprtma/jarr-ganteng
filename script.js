const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');

openBtn.addEventListener('click', () => {
    envelope.classList.add('open');
    launchConfetti();
});

// Simple confetti
function launchConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        confetti.style.animationDuration = 2 + Math.random()*3 + 's';
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
