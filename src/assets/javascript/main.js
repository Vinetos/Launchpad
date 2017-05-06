const path = 'assets/musics/saxo/';

document.addEventListener('keydown', function (event) {
    document.getElementById('key').innerHTML = event.keyCode;

    if (event.keyCode == 97) { // Key 1
        var sound = new Howl({
            src: [path + 'lead-1.mp3']
        });

        sound.play();
    } else if (event.keyCode == 98) { // Key 2
        var sound = new Howl({
            src: [path + 'lead-2.mp3']
        });

        sound.play();
    } else if (event.keyCode == 99) { // Key 3
        var sound = new Howl({
            src: [path + 'lead-3.mp3']
        });

        sound.play();
    }
});