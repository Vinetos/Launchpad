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

// Load a music
function loadMusic(music) {
    loadJS('masonic.js');
    loadNotes('masonic');
}

// Load an the notes
function loadNotes(music) {
    let i = new XMLHttpRequest;
    i.open("GET", "assets/musics/" + music + "/notes.json");// Read the properties of the note file (ex: 'masonic')
    i.onreadystatechange = function () {
        if (i.readyState === 4 && i.status === 200) {
            // Parse the file
            let rawText = i.responseText;
            notes = JSON.parse(rawText);
            console.log("Loaded notes.json !");
        }
    };
    i.send();
}

//
function getNoteProperties(noteCode) {
    // Check if the
}

//Play sound from a Howl
function playSound(sound) {
    sound && sound.play();
}