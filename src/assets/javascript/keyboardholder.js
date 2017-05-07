let keysDown = {};
let musicHolder = undefined;

// When a key is pressed
document.addEventListener('keydown', function (event) {
    // Prevent duplicated calls
    if (keysDown[event.keyCode] !== undefined && keysDown[event.keyCode])
        return;

    let e = document.getElementById(event.keyCode + "");
    if (e !== undefined && e !== null) {
        // Set the key pressed
        keysDown[event.keyCode] = true;

        // Update Style
        let clazz = e.className;
        if (clazz.indexOf("pressed") == -1)
            e.className += " pressed";

        // Fire event
        musicHolder && musicHolder(event.keyCode);

    }
});

// When a key is released
document.addEventListener('keyup', function (event) {
    // Prevent duplicated calls
    if (!keysDown[event.keyCode])
        return;

    let e = document.getElementById(event.keyCode + "");
    if (e !== undefined && e !== null) {
        // Reset the key value
        keysDown[event.keyCode] = false;

        // Update style
        let clazz = e.className;
        if (clazz.indexOf("pressed") != -1)
            e.className = "button";

    }
});