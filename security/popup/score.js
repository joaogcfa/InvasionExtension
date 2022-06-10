function getScore(tabs) {
    let tab = tabs.pop();

    var activeTabUrl = document.getElementById('header-score');
    var conn= window.performance.getEntries()
    var text = document.createTextNode("Score: ");
    var connList = document.getElementById('score-list');
    var p = document.createElement("p");
    activeTabUrl.appendChild(text);

    const cookies = document.getElementById("header-title");
  
    let li = document.createElement("li");
    let content = document.createTextNode(cookies.textContent);
    li.appendChild(content);
    connList.appendChild(li);
  }


function Tab() {
   
    return browser.tabs.query({currentWindow: true, active: true});
  }


 
Tab().then(getScore);
 