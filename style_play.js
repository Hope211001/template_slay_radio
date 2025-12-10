
function togglePlay(btn) {
    const card = btn.closest('.gradient-card');
    const line = card.querySelector('.moving-line');
    const playIcon = btn.querySelector('.icon-play');
    const musicIcon = btn.querySelector('.icon-music');

    const isPlaying = !musicIcon.classList.contains('hidden');

    if (isPlaying) {
        line.style.animationPlayState = 'paused';
        musicIcon.classList.add('hidden');
        playIcon.classList.remove('hidden');
    } else {
        line.style.animationPlayState = 'running';
        musicIcon.classList.remove('hidden');
        playIcon.classList.add('hidden');
    }
}
