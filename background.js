chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "OFF",
      })
});

chrome.action.onClicked.addListener(async (tab) => {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id }); 
    const nextState = prevState === 'ON' ? 'OFF' : 'ON'
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
    });
    if (nextState === "ON") {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            files: ['content.js']
        });
    }else if (nextState === "OFF") {
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: closeExtension,
        });
    }
});

chrome.commands.onCommand.addListener(async (command, tab) => {
    console.log(command)   
});

const closeExtension = () => {
    const element = document.getElementById('frontdoor-container');
    element.remove();
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'open-new-page') {
        chrome.tabs.create({ url: 'https://www.frontdoor.xyz/' }, function(tab) {       
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['content.js']
            });
            chrome.storage.sync.set({'tab': tab.id}, function() {
                console.log('Settings saved');
            });
        });
        sendResponse('New page opened and tabID saved');
    }else{
        const state = "ON"
        chrome.action.setBadgeText({
            tabId: message,
            text: state,
        });
        sendResponse('Badge text changed');
    }
  });

  
 