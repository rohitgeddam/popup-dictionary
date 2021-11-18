let p = document.getElementById('definition')
let w = document.getElementById('word')
let bgpage = chrome.extension.getBackgroundPage();
let word = bgpage.word;

w.innerHTML = word;

let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
fetch(url)
.then(res => res.json())
.then(data => {
    let def = data[0]["meanings"][0]["definitions"][0]["definition"]
    console.log(def)
    p.innerHTML = def
})
.catch(err => {
    p.innerHTML = "please select a valid word."
})
