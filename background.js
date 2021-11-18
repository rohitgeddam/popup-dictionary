console.log("background script loaded!")

chrome.runtime.onMessage.addListener(receiver);

window.word = "coding train";

function receiver(request, render, sendResponse){
   
    window.word = request.text
}