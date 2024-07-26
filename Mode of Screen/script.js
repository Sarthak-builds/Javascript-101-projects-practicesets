// access the button and body of the document
let btn= document.querySelector(".btn");
let bg=document.querySelector("body");
// ading an event listener, which has a click as an event and modeset as a call back function.
let mode=true; 
btn.addEventListener("click",function modeset(){
    
    if(mode){
        console.log("switched to dark");
        bg.style.backgroundColor="black";
        btn.innerText="Dark Mode";
        mode=false;
    }
    else {
        console.log("switched to light");
        bg.style.backgroundColor="white";
        btn.innerText="light Mode";
        mode=true;
    }
})
