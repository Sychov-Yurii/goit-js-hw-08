
import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const STORAGE_KEY = 'videoplayer-current-time';


const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

const saveCurrentTime = throttle( ({ seconds }) => {
    
        localStorage.setItem(STORAGE_KEY, seconds)
 
}, 1000);


player.on('timeupdate', saveCurrentTime);

window.addEventListener('load', () => {
    const savedTime = localStorage.getItem(STORAGE_KEY);
    if (savedTime) {
        player.setCurrentTime(parseFloat(savedTime));
    }
});