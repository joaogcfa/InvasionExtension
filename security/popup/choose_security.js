document.addEventListener("click", function (e) {
    var content = document.createElement("p");
    content.textContent = "ABRIIIIUUU";
    document.body.appendChild(content);
    content.setAttribute("class", "texto");

    // if (!e.target.classList.contains("sec")) {
    //     console.log("plau");
    //     return;
    // }

    // var chosenSec = e.target.textContent;
    // console.log(chosenSec);

    // chrome.tabs.executeScript(null, {
    //     file: "/content_scripts/security.js"
    // });

    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, { sec: chosenSec });
    //     console.log("aqui");
    // });

});
