console.log("Chrome Extension GO?")

window.addEventListener('mouseup', wordSelector);

function wordSelector(){
    let selectedText = window.getSelection().toString().trim();
    
    if(selectedText.length > 0){
        let message = {
            text: selectedText
        }

        chrome.runtime.sendMessage(message);
    }
}