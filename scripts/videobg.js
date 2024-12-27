const video = document.getElementById("myVideo");
const btn = document.getElementById("myPlay");

function myPlay() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}