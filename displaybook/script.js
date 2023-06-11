let title = document.querySelector("#title");
let text = document.querySelector("#text");
//let textItem = fetch("displaybook/collection.json").then((response) => response.json()).then((json) => {title.innerHTML = json.items[0].title});
console.log("se");

let changeTitle = function(titleObj, textObj, callback){
    let textItem = fetch("displaybook/collection.json").then((response) => response.json()).then(result => {
        titleObj.textContent = result.items[0].title;callback(textObj, result.items[0].id);
    });
}

let changeText = function(textObj, num){
    fetch("displaybook/text.json").then((response) => response.json()).then((json) => {textObj.textContent = json.items[num]});
}

changeTitle(title, text, changeText);