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
        if (clazz.indexOf("pressed") == -1)//pressed isn't exist
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
        if (clazz.indexOf("pressed") != -1)//pressed exist
            e.className = "button";

    }
});

function keyPressed(element) {
    // Update Style
    if (element.className.indexOf("pressed") == -1) {//pressed isn't exist
        element.className += " pressed";
        setTimeout(function () { //100 ms after
            element.className = "button";
        }, 100);
    } else {
        element.className = "button";
    }
    // Fire event
    musicHolder && musicHolder(element.id);
}
