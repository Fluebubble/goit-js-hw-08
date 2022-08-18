import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('play', function() {
    console.log('played the video!');
    
});

player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function(seconds) {
    console.log("chaplin", localStorage.getItem(STORAGE_KEY))
})


function saveCurrentTimeToLocalStorage(data) {
    const currentVideoTime = data.seconds;
    localStorage.setItem(STORAGE_KEY, currentVideoTime);
    console.log(currentVideoTime);
}

player.on('timeupdate', throttle(saveCurrentTimeToLocalStorage, 1000));


