async function getJson(file){
    let j = await fetch(file).then((response) => response.json());
    return j;
}

getJson("displaybook/collection.json").then((json) => {
    let sub = document.querySelectorAll(".subcollection");
    sub.forEach(element => {
        element.innerHTML = "";
    });
    for(let i = 0; i < json.items.length; i++){
        sub[i % 3].innerHTML += json.items[i].title;
    }
});