var video = document.getElementById('video');
var playPause = document.getElementById('playPause');
var progressBar = document.querySelector('.progress-fill');
var fs = document.getElementById('fs');

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

// FullScreen
var isFullScreen = function () {
    return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
};

var handleFullscreen = function () {
    if (isFullScreen()) {
        if (document.exitFullscreen) document.exitFullscreen();
    }
    else {
        if (video.requestFullscreen) video.requestFullscreen();
    }
};

fs.addEventListener('click', function (e) {
    handleFullscreen();
});