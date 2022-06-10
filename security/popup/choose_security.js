var cookies=0;
function getCookies(tabs) {

   let tab = tabs.pop();
 
   var cookies = browser.cookies.getAll({url: tab.url});
   cookies.then((cookies) => {
 
     var activeTabUrl = document.getElementById('header-title');
     var text = document.createTextNode("Cookies");
     var cookieList = document.getElementById('cookie-list');
     var p = document.createElement("p");
     activeTabUrl.appendChild(text);
 
    var count=0;
     if (cookies.length > 0) {
       for (let cookie of cookies) {
         count++;
       }
      let li = document.createElement("li");
      let content = document.createTextNode(count);
      content.id ="cookies-id";
      li.appendChild(content);
      cookieList.appendChild(li);
       
     } else {
       let p = document.createElement("p");
       let content = document.createTextNode("No cookies in this tab.");
       let parent = cookieList.parentNode;
 
       p.appendChild(content);
       parent.appendChild(p);
     }

     cookies=count;
   });
 }
 
 
 function Tab() {
   return browser.tabs.query({currentWindow: true, active: true});
 }

 Tab().then(getCookies);
 
