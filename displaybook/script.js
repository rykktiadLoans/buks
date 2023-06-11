let title = document.querySelector("#title");
let text = document.querySelector("#text");
let textItem = fetch("displaybook/collection.json").then((response) => response.json()).then(
    (c)=> {
        return fetch("displaybook/text.json").then((response) => response.json()).items[c];
    }
);
text.innerHTML = textItem;