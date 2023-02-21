chrome.storage.sync.get(['page', 'tab'], function(items) {
    if(items.page === "FROMEXTENSION"){
        chrome.runtime.sendMessage(items.tab, (response) => {
            console.log(response);
        });
        chrome.storage.sync.clear();
        var backgroundContainer = document.createElement('div');
        backgroundContainer.id = 'frontdoor-container';
        backgroundContainer.style.cssText = 'position: fixed; z-index: 2147483644 !important; height: 65vh; width: 60vh; top:200px; right:0; border-radius:30px; background-color: #363b44; display: flex; flex-direction: column;padding: 30px;justify-content: space-evenly;';

        var card1 = document.createElement('div');
        card1.style.cssText = 'width:100%; background-color: #767a80; border-radius:15px; height: 100%; margin: 10px 0; cursor:pointer;';

        var card2 = document.createElement('div');
        card2.style.cssText = 'width:100%; background-color: #767a80; border-radius:15px; height: 100%; margin: 10px 0; cursor:pointer;';

        var card3 = document.createElement('div');
        card3.style.cssText = 'width:100%; background-color: #767a80; border-radius:15px; height: 100%; margin: 10px 0; cursor:pointer;';

        document.body.appendChild(backgroundContainer);
        backgroundContainer.appendChild(card1);
        backgroundContainer.appendChild(card2);
        backgroundContainer.appendChild(card3);
        
        card1.onclick = function() {
            chrome.runtime.sendMessage('open-new-page', (response) => {
                console.log(response);
                chrome.storage.sync.set({'page': 'FROMEXTENSION'});
            });
        }
        card2.onclick = function() {
            chrome.runtime.sendMessage('open-new-page', (response) => {
                console.log(response);
                chrome.storage.sync.set({'page': 'FROMEXTENSION'});
            });
        }
        card3.onclick = function() {
            chrome.runtime.sendMessage('open-new-page', (response) => {
                console.log(response);
                chrome.storage.sync.set({'page': 'FROMEXTENSION'});
            });    
        }
    }else{
        var blurredBackgroundContainer = document.createElement('div');
        blurredBackgroundContainer.id = 'frontdoor-container';
        blurredBackgroundContainer.style.cssText = 'position: fixed; z-index: 2147483644 !important; height: 100%; width: 100%; top:0; left:0; right:0; bottom:0; background-color: rgba(255, 255, 255, .15); backdrop-filter: blur(5px);';
    
        var searchContainer = document.createElement('div')
        searchContainer.id = 'search-container';
        searchContainer.style.cssText = 'width:60vw; height: 100px; margin: 30vh auto 0 auto; background-color: #363b44; border-radius:30px; display: flex; flex-direction: row; justify-content: space-between;';
    
        var searchBox = document.createElement('input')
        searchBox.id = 'search-box';
        searchBox.style.cssText = 'padding:25px; width: 100%;background: transparent;border: none;color: white;font-size: 28px;outline: 0;';
        searchBox.placeholder = "Input your search here";
    
        var SearchBtn = document.createElement('div')
        SearchBtn.id = 'search-btn';
        SearchBtn.innerText = 'Search';
        SearchBtn.style.cssText = 'width:15%; display: flex;justify-content: center; align-items: center; cursor: pointer; color: white;';
    
        searchContainer.appendChild(searchBox);
        searchContainer.appendChild(SearchBtn);
        blurredBackgroundContainer.appendChild(searchContainer);
        document.body.appendChild(blurredBackgroundContainer);
        searchBox.focus();
    
        SearchBtn.onclick = function() {
            const element = document.getElementById('frontdoor-container');
            element.remove();
            var backgroundContainer = document.createElement('div');
            backgroundContainer.id = 'frontdoor-container';
            backgroundContainer.style.cssText = 'position: fixed; z-index: 2147483644 !important; height: 65vh; width: 60vh; top:200px; right:0; border-radius:30px; background-color: #363b44; display: flex; flex-direction: column;padding: 30px;justify-content: space-evenly;';

            var card1 = document.createElement('div');
            card1.style.cssText = 'width:100%; background-color: #767a80; border-radius:15px; height: 100%; margin: 10px 0; cursor:pointer;';

            var card2 = document.createElement('div');
            card2.style.cssText = 'width:100%; background-color: #767a80; border-radius:15px; height: 100%; margin: 10px 0; cursor:pointer;';

            var card3 = document.createElement('div');
            card3.style.cssText = 'width:100%; background-color: #767a80; border-radius:15px; height: 100%; margin: 10px 0; cursor:pointer;';

            document.body.appendChild(backgroundContainer);
            backgroundContainer.appendChild(card1);
            backgroundContainer.appendChild(card2);
            backgroundContainer.appendChild(card3);
            
            card1.onclick = function() {
                chrome.runtime.sendMessage('open-new-page', (response) => {
                    console.log(response);
                    chrome.storage.sync.set({'page': 'FROMEXTENSION'});
                });
            }
            card2.onclick = function() {
                chrome.runtime.sendMessage('open-new-page', (response) => {
                    console.log(response);
                    chrome.storage.sync.set({'page': 'FROMEXTENSION'});
                });
            }
            card3.onclick = function() {
                chrome.runtime.sendMessage('open-new-page', (response) => {
                    console.log(response);
                    chrome.storage.sync.set({'page': 'FROMEXTENSION'});
                });    
            }
        };
    
        document.getElementById("search-box").addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("search-btn").click();
            }
        });
    }
});





 