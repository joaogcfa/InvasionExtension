
async function getScore(tabs) {
  let tab = tabs.pop();

   

    var activeTabUrl = document.getElementById('header-score');
    var text = document.createTextNode("Score ");
    var scoreList = document.getElementById('score-list');
    // scoreList.className="content";

    var p = document.createElement("p");
    activeTabUrl.appendChild(text);
    const response = await browser.tabs.sendMessage(tab.id, { 
      method: "localStorageData"
    });
  

    const cookies = document.getElementById("cookies-id");
    const conn = document.getElementById("conn-id");
    const stg = document.getElementById("stg-id");

 

    var total = Number(cookies.textContent)+Number(conn.textContent)+  Number(stg.textContent);
   


    if(total> 33 && total <66){
      scoreList.className="yellow_color";
    }else if( total>= 66){
      scoreList.className="red_color";
    }else{
      scoreList.className="green_color";

    }

  
    let li = document.createElement("div");
    let content = document.createTextNode(total);
    li.appendChild(content);
    scoreList.appendChild(li);
  }


function Tab() {
   
    return browser.tabs.query({currentWindow: true, active: true});
  }

document.addEventListener("DOMContentLoaded", function(event) { 
    //do work
    Tab().then(getScore);

  });
 
 