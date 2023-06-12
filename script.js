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