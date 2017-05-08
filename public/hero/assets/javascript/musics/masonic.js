const path = 'assets/musics/masonic/';
const format = '.mp3';
const songs = [
    loadSound('normal'),
    loadSound('filtered')
];
let isPlaying = false;
let current = 0;

musicHolder = (keyCode) => {
    if(!isPlaying) {
        // Launch the songs
        playSound(songs[0]);
        playSound(songs[1]);

        // Define volumes
        songs[0].volume(1);
        songs[1].volume(0.25);

        // Fires when the song finishes playing.
        songs[1].on('end', function(){
            isPlaying = false;
        });

        isPlaying = true;
    } else {
        // Change the volume
        songs[current].volume(0.25);
        // Update the current song
        if(current === 1)
            current = 0;
        else
            current = 1;
        // Change the volume
        songs[current].volume(1);
    }
};