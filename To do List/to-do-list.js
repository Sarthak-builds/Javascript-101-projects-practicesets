const btn= document.querySelector(".content-btn");
const content= document.querySelector(".content-input");
const listItems= document.querySelector("#list-main");
 btn.addEventListener('click',()=>{
    let newTask= document.createElement("li");
    newTask.innerText= content.value;
    listItems.append(newTask);
 });
 newTask.addEventListener('click',()=> {
    console.log(newTask);
 })