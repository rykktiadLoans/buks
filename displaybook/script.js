let title = document.querySelector("#title");
let text = document.querySelector("#text");
let collection = fetch("https://rykktiadloans.github.io/buks/displaybook/collection.json").then((response) => response.json()).then((json) => console.log(json));