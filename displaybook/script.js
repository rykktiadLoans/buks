let title = document.querySelector("#title");
let text = document.querySelector("#text");
let textItem = fetch("displaybook/collection.json").then((response) => response.json()).then((json) => {title.innerHTML = json.items[0].title});