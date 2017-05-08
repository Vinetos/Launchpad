// Load sound from the path and the format
function loadSound(name) {
    return new Howl({
        src: [path + name + format]
    });
}

// Load an js file
function loadJS(file, isMusicFile = true) {
    let jsElm = document.createElement("script");
    // set the type attribute and make the script element load file
    jsElm.type = "application/javascript";
    jsElm.src = (isMusicFile ? "assets/javascript/musics/" : "assets/javascript/") + file;
    // Insert the element to the body element in order to load the script
    document.body.appendChild(jsElm);
}

//Play sound from a Howl
function playSound(sound) {
    sound && sound.play();
}