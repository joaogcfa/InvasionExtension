var cookies=0;
function getCookies(tabs) {

   let tab = tabs.pop();
 
   var cookies = browser.cookies.getAll({url: tab.url});
   cookies.then((cookies) => {
 
     var activeTabUrl = document.getElementById('header-title');
     var text = document.createTextNode("Cookies");
     var cookieList = document.getElementById('cookie-list');
     cookieList.className="content";
     cookieList.id="cookies-id";

     var p = document.createElement("p");
     activeTabUrl.appendChild(text);
 
    var count=0;
     if (cookies.length > 0) {
       for (let cookie of cookies) {
         count++;
       }
      let li = document.createElement("div");
      let content = document.createTextNode(count);
     
      li.appendChild(content);
      cookieList.appendChild(li);
       
     } else {
       let li = document.createElement("div");
       let content = document.createTextNode(0);
       li.appendChild(content);
       cookieList.appendChild(li);
     }

     cookies=count;
   });
 }
 
 
 function Tab() {
   return browser.tabs.query({currentWindow: true, active: true});
 }

 Tab().then(getCookies);
 
