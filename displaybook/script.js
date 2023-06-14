let title = document.querySelector("#title");
let text = document.querySelector("#text");

const query = new URLSearchParams(window.location.search).get("id");

let changeTitle = function(titleObj, textObj, callback){
    let textItem = fetch("displaybook/collection.json").then((response) => response.json()).then(result => {
        titleObj.textContent = result.items[query].title;callback(textObj, result.items[query].id);
    });
}

let changeText = function(textObj, num){
    fetch("displaybook/text.json").then((response) => response.json()).then((json) => {textObj.textContent = json.items[num]});
}

changeTitle(title, text, changeText);