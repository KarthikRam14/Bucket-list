var bucketlist = [];

var listItem = document.getElementById("list-container")
function addValues(){
    let value = document.getElementById("input-field").value;
    bucketlist.push(value);
    showList();
}

function remove(i){
    bucketlist.splice(i,1);
    showList();
}

function showList(){
    listItem.innerHTML="";
    for(let i=0;i<bucketlist.length;i++){
        let li = document.createElement("li")
        li.innerHTML = bucketlist[i]+'<span><img class="checked" onclick="remove('+i+')" src = "https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png"/></span>';
        li.className = "list";
        listItem.appendChild(li);
    }
}

function reset(){
    bucketlist = [];
    showList();
}