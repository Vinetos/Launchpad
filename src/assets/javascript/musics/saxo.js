const path = 'assets/sounds/saxo/';
const format = '.mp3';
const saxoKeys = {
    1: loadSound('lead-1'),
    2: loadSound('lead-2'),
    3: loadSound('lead-3'),

    4: loadSound('piano-1'),
    5: loadSound('piano-2'),
    6: loadSound('piano-3'),
    7: loadSound('piano-4'),

    8: loadSound('saxo-1'),
    9: loadSound('saxo-2'),
    10: loadSound('saxo-3'),
    11: loadSound('saxo-4')

};

musicHolder = (keyCode) => {
    playSound(saxoKeys[keyCode]);
};