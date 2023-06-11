let title = document.querySelector("#title");
let text = document.querySelector("#text");
let collection = fetch("displaybook/collection.json").then((response) => response.json());
console.log(collection.items.id);