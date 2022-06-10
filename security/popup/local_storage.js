var storage=0;
async function getStorage(tabs) {


    let tab = tabs.pop();

    var activeTabUrl = document.getElementById('header-stg');
    var text = document.createTextNode("Local Storage");
    var list = document.getElementById('storage-list');
    var p = document.createElement("p");
    activeTabUrl.appendChild(text);

    
   

    const response = await browser.tabs.sendMessage(tab.id, { 
        method: "localStorageData"
      });
    



    let li = document.createElement("li");
    let content = document.createTextNode(response.data.length);
    li.appendChild(content);
    list.appendChild(li);

    

    storage= response.data.length;
   
}


function Tab() {
   
    return browser.tabs.query({currentWindow: true, active: true});
  }


 
Tab().then(getStorage);
  