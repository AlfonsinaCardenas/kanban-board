
function RemoveButton(){
    list = document.getElementById("list");
    li = list.lastElementChild;
    list.removeChild(li);
}

function AddToList(){
    const item = prompt("New item: ");
    if (item){
        const li = document.createElement("li");
        li.textContent = item;
        document.getElementById("list").appendChild(li);
    }
}