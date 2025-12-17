function playSound(id) {
    const audio = document.getElementById(id);
    audio.currentTime = 0;
    audio.play();
}
function setVolume(value) {
    const sounds = document.querySelectorAll("audio");
    sounds.forEach(sound => {
        sound.volume = value;
    });
}
window.onload=()=>{
    setVolume(0.8);
};
