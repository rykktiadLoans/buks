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
        let min = Math.min(sub[0].clientHeight, sub[1].clientHeight, sub[2].clientHeight);
        if(min === sub[0].clientHeight){
            sub[0].innerHTML += `<div class="colitem">${json.items[i].title}</div>`;
        }
        else if(min === sub[1].clientHeight){
            sub[1].innerHTML += `<div class="colitem">${json.items[i].title}</div>`;
        }
        else if(min === sub[2].clientHeight){
            sub[2].innerHTML += `<div class="colitem">${json.items[i].title}</div>`;
        }
        
    }
});

let table = document.querySelector("#collection");
table.onmouseover = function(event) {
    let item = event.target.closest(".colitem");
    if(!item){
        return;
    }
    item.style.border = "2px solid rgb(28, 153, 207)";
    let shadow = "2px 2px 7px rgb(28, 153, 207)";
    item.style.boxShadow = shadow + ", "+ "-2px -2px 7px rgb(28, 153, 207)";
};

table.onmouseout = function(event) {
    let item = event.target.closest(".colitem");
    if(!item){
        return;
    }
    item.style.border = "2px solid rgb(71, 71, 71)";
    let shadow = "0px 0px 5px white";
    item.style.boxShadow = shadow + ", "+ shadow;
};