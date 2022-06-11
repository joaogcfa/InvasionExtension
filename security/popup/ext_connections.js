var connections=0;
function getConnections(tabs) {
    let tab = tabs.pop();

    var activeTabUrl = document.getElementById('header-conn');
    var conn= window.performance.getEntries()
    var text = document.createTextNode("External Connections");
    var connList = document.getElementById('conn-list');
    connList.className="content";
    connList.id="conn-id";


    var p = document.createElement("p");
    activeTabUrl.appendChild(text);

    var url= tab.url.replace("www.", "").replace("https://", "");

    var count=0;
    
   
    
    for (i=0; i< conn.length; i++){


        if (!conn[i].name.includes(url) ){

            count++;

        }

    }
  
    let li = document.createElement("div");
    let content = document.createTextNode(count);
    li.appendChild(content);
    connList.appendChild(li);

    connections=count;
  }
  
  
  function Tab() {
    return browser.tabs.query({currentWindow: true, active: true});
  }

  document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    Tab().then(getConnections);

  });
 
 
  