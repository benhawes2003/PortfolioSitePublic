let isScrolling = false;
let targetScroll = 0;
let currentScroll = 0;

const speedMultiplier = 0.04;

window.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (!isScrolling) {
        currentScroll = window.scrollY;
        targetScroll = currentScroll;
        isScrolling = true;
        requestAnimationFrame(smoothScroll);
    }
    targetScroll += e.deltaY;
}, { passive: false });

function smoothScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
    currentScroll += (targetScroll - currentScroll) * speedMultiplier;
    window.scrollTo(0, currentScroll);

    if (Math.abs(targetScroll - currentScroll) > 1) {
        requestAnimationFrame(smoothScroll);
    } else {
        isScrolling = false;
    }
}