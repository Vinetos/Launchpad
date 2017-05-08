// Overriden charcodes
const overriden = {
    219: '°',
    187: '+',
    221: '^',
    196: '$',
    192: '%',
    220: 'µ',
    226: '>',
    188: ',',
    190: ';',
    191: ':',
    223: '!',
    16: '⇧'
};

function fromCharCode(code) {
    let char = overriden[code];
    if (char !== undefined)
        return char;
    else
        return String.fromCharCode(code);
}