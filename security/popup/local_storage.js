function getStorage(tabs) {

    let tab = tabs.pop();

    var activeTabUrl = document.getElementById('header-title');
    var text = document.createTextNode("Local Storage: "+tab.title);
    var list = document.getElementById('storage-list');
    var p = document.createElement("p");
    activeTabUrl.appendChild(text);
 

    var total = 0;
    for (var x in localStorage) {
        // // Value is multiplied by 2 due to data being stored in `utf-16` format, which requires twice the space.
        // var amount = (localStorage[x].length * 2) / 1024 / 1024;
        // total += amount;
        total += 1;
    }
    // var values = []
    // keys = Object.keys(window.localStorage)

    // while ( i-- ) {
    //     values.push( localStorage.getItem(keys[i]) );
    // }

    let li = document.createElement("li");
    let content = document.createTextNode(total);
    li.appendChild(content);
    list.appendChild(li);

    // return values;
}


function Tab() {
    return browser.tabs.query({currentWindow: true, active: true});
  }
 
  Tab().then(getStorage);
  