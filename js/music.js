function repeat() {
    var audio = document.getElementById('myaudio');
    audio.currentTime = 0; //重新播放
}
function control() {
    var audio = document.getElementById('myaudio');
    if (audio !== null) {
        if (audio.paused) {
            audio.play(); // 播放
        } else {
            audio.pause(); // 暂停
        }
    }
}