browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.method==  "localStorageData") {
      
     
        sendResponse({ 
          data: Object.entries(localStorage) 
        });
    
     
    }else{

        sendResponse({ 
          data: null 
        });
        
    }
  });