let keysDown = {};
let customId = {};
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
        musicHolder && customId[event.keyCode] && musicHolder(customId[event.keyCode]);

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
    musicHolder && customId[element.id] && musicHolder(customId[element.id]);
}


// Load keyboard
function loadKeyboard(type) {
    loadJS('keyboards/' + type + '.js', false);
    // Load the keyboard UI and generate the html file
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
                // Generate the keyboard
                let ul = document.getElementsByClassName("buttons-row")[index];
                let li = document.createElement("li");
                value = value.trim(); // Remove lines break and spaces
                li.appendChild(document.createTextNode(fromCharCode(value)));
                li.setAttribute("class", "button");
                li.setAttribute("id", value);
                li.setAttribute("onclick", "keyPressed(this)");
                ul.appendChild(li);
                customId[value] = keyId++;
            }
        }
    };
    i.send();
}