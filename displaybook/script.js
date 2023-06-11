let title = document.querySelector("#title");
let text = document.querySelector("#text");
let textItem = fetch("displaybook/collection.json").then((response) => response.json());
title.innerHTML = textItem.items[0].title;