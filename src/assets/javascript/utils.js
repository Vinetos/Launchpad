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
            }
        }
    };
    i.send();
}

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