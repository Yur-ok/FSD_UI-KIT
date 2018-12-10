var video = document.getElementById('video');
var playPause = document.getElementById('playPause');
var progress = document.querySelector('.progress');
var progressBar = document.querySelector('.progress-fill');
var fs = document.getElementById('fs');
var player = document.querySelector('.player');
var videoDesc = document.querySelector('.description');

//Play - Pause
function handlePlay() {
    if (video.paused || video.ended) {
        video.play();
        playPause.className = 'pause';
    } else {
        video.pause();
        playPause.className = 'play';
    }
}
// click on btn
playPause.addEventListener('click', function (e) {
    handlePlay()
});

//click on player
video.addEventListener('click', function (e) {
    handlePlay()
});

// progressBar
video.addEventListener('timeupdate', function () {
    progressBar.style.width = (video.currentTime / video.duration) * 100 + '%';
});

function srcub(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

progress.addEventListener('click', srcub);

// FullScreen
var isFullScreen = function () {
    return !!(document.fullscreenElement);
};
console.log(isFullScreen());

var handleFullscreen = function () {
    if (isFullScreen()) {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
    }
    else {
        if (player.requestFullscreen) player.requestFullscreen();
        else if (player.webkitRequestFullScreen) player.webkitRequestFullScreen();
    }
};

fs.addEventListener('click', function (e) {
    handleFullscreen();
});