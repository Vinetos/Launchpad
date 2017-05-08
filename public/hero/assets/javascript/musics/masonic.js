const path = 'assets/musics/masonic/';
const format = '.mp3';
const songs = [
    loadSound('normal'),
    loadSound('filtered')
];
let isPlaying = false;
let current = 0;
let startTime = 0;

musicHolder = (noteCode) => {
    if(!isPlaying) {
        // Launch the songs
        playSound(songs[0]);
        playSound(songs[1]);

        // Define volumes
        songs[0].volume(1);
        songs[1].volume(0.25);

        // Set start time
        startTime = Date.now();

        // Fires when the song finishes playing.
        songs[1].on('end', function(){
            isPlaying = false;
            startTime = 0;
        });

        isPlaying = true;
    } else {
        // Change the volume (from 1 to 0.25 in 1s)
        songs[current].fade(1, 0.25, 1000);
        // Update the current song
        if(current === 1)
            current = 0;
        else
            current = 1;
        // Change the volume (from 0.25 to 1 in 1s)
        songs[current].fade(0.25, 1, 1000);
    }
};