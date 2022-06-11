var storage=0;
async function getStorage(tabs) {


    let tab = tabs.pop();

    var activeTabUrl = document.getElementById('header-stg');
    var text = document.createTextNode("Local Storage");
    var list = document.getElementById('storage-list');
    list.className="content";
    list.id="stg-id";

    var p = document.createElement("p");
    activeTabUrl.appendChild(text);

    
   

    const response = await browser.tabs.sendMessage(tab.id, { 
        method: "localStorageData"
      });
    



    var li = document.createElement("div");
    
    let content = document.createTextNode(response.data.length);
    li.id="cookie_id";

    li.appendChild(content);
    list.appendChild(li);

    

    storage= response.data.length;
   
}


function Tab() {
   
    return browser.tabs.query({currentWindow: true, active: true});
  }

document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    Tab().then(getStorage);

  });
 

 
