let list= document.getElementsByClassName("list");
let rightBox= document.querySelector("#right");
let leftBox= document.querySelector("#left");


rightBox.addEventListener("dragover",function(e){
    e.preventDefault();
});
rightBox.addEventListener("drop", function(e){
    e.preventDefault();
    if (selected!==null){
    rightBox.appendChild(selected);
    selected=null;
    }
});
leftBox.addEventListener("dragover",function(e){
    e.preventDefault();
});
leftBox.addEventListener("drop", function(e){
    e.preventDefault();
    if (selected!==null){
    leftBox.appendChild(selected);
    selected=null;
    }
});

let selected= null;
for (let items of list) {
    items.addEventListener("dragstart", function (e) {
        selected= e.target;
    });
}

let field=document.querySelector("#selectfield");
let fieldtext=document.querySelector("#selecttext");
let options= document.querySelectorAll(".options");
let listvis= document.querySelector("#list");
let arrowIcon= document.querySelector("#arrow");
console.log(field, fieldtext,options)

for (let option of options) {
    option.onclick= function(){
        fieldtext.innerHTML= this.textContent;
        listvis.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }
};
field.onclick= function() {
    listvis.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}