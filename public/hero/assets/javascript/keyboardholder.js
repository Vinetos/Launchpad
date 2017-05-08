let keysDown = {};
let customId = {};
let musicHolder = undefined;

// When a key is pressed
document.addEventListener('keydown', function (event) {
    // Prevent duplicated calls
    if (keysDown[event.keyCode] !== undefined && keysDown[event.keyCode])
        return;

    // Fire event
    musicHolder && customId[event.keyCode] && musicHolder(customId[event.keyCode]);

});

// When a key is released
document.addEventListener('keyup', function (event) {
    // Prevent duplicated calls
    if (!keysDown[event.keyCode])
        return;

    // TODO empty for now

});

function keyPressed(element) {
    // Fire event
    musicHolder && customId[element.id] && musicHolder(customId[element.id]);
}


// Load keyboard
function loadKeyboard(type) {
    loadJS('keyboards/' + type + '.js', false);
    // Load the keyboard
    let i = new XMLHttpRequest;
    i.open("GET", "assets/javascript/keyboards/" + type);// Read the properties of the "keyboard" file (ex: azerty)
    i.onreadystatechange = function () {
        if (i.readyState === 4 && i.status === 200) {
            // Parse the file
            let array = i.responseText.split(",");
            let index = 0;
            let keyId = 1;
            for (let value of array) {
                if (value == -1) {
                    index++;
                    continue;
                }
                // Generate the custom keyboard id
                customId[value] = keyId++;
            }
        }
    };
    i.send();
}