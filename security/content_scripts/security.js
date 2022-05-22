// Assign beastify() as a listener for messages from the extension.
chrome.runtime.onMessage.addListener(sec);

function sec(request, sender, sendResponse) {
    removeEverything();
    insertText();
    chrome.runtime.onMessage.removeListener(sec);
}

function removeEverything() {
    while (document.body.firstChild) {
        document.body.firstChild.remove();
    }
}

function insertText() {
    var content = document.createElement("p");
    content.textContent = "aquii ta entrando";
    document.body.appendChild(content);
    document.body.setAttribute("class", "text");
}


