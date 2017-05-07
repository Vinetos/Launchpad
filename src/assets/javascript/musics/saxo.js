const path = 'assets/musics/saxo/';
const format = '.mp3';
const saxoKeys = {
    49: loadSound('lead-1'),
    50: loadSound('lead-2'),
    51: loadSound('lead-3'),

    87: loadSound('piano-1'),
    88: loadSound('piano-2'),
    67: loadSound('piano-3'),
    86: loadSound('piano-4'),

    79: loadSound('saxo-1'),
    73: loadSound('saxo-2'),
    85: loadSound('saxo-3'),
    89: loadSound('saxo-4')

};

musicHolder = (keyCode) => {
    let sound = saxoKeys[keyCode];
    sound && sound.play();
};

function loadSound(name) {
    return new Howl({
        src: [path + name + format]
    });
}