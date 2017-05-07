// Load an js file
function loadJS(file) {
    let jsElm = document.createElement("script");
    // set the type attribute and make the script element load file
    jsElm.type = "application/javascript";
    jsElm.src = "assets/javascript/musics/" + file;
    // Insert the element to the body element in order to load the script
    document.body.appendChild(jsElm);
}
// Load the keyboard UI and generate the html file
function setup() {
    let i = new XMLHttpRequest;
    i.open("GET", "assets/keyboards/azerty");// Read the properties of the "azerty" file
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
                li.appendChild(document.createTextNode(String.fromCharCode(value)));
                li.setAttribute("class", "button");
                li.setAttribute("id", value);
                li.setAttribute("onclick", "keyPressed(this)");
                ul.appendChild(li);
            }
        }
    };
    i.send();
}

setup();
// Load the default music
loadJS("saxo.js");