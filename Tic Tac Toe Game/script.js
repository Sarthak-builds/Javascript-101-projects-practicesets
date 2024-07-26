//get access to the boxes and the reset button
let box= document.querySelectorAll(".boxes");
let resetbtn=document.querySelector(".btn");
let winbtn=document.querySelector("#winpara");
// Will add eventlistener to write alternate X and O in the boxes 
let turn ="playerx";
let click=0;
box.forEach(function(box) {
    box.addEventListener("click",function() {
        if (turn==="playerx"){
          turn="playero";
          box.innerText="X";
          click++;
        }
        else {
          turn="playerx";
          box.innerText="O";
          click++;
        }
        //we cant click a box again after clicked once. so,
        box.disabled=true;
        //calling function to check winner
        checkWinner();
      });
});
//disbale/enable boxes after winning
let disableboxes=()=>{
    box.forEach(function(box){
        box.disabled=true;
    });
}
let enableboxes=()=>{
    box.forEach(function(box){
        box.disabled=false;
        box.innerText="";
        
    });
}
//resetting function
const resetAll=()=>{
    turn="playerx";
    enableboxes();
    winbtn.classList.add("hide");
    }
//show winner function
showWinner=(winner)=>{
    winbtn.innerText=`WINNER IS ${winner}`;
    winbtn.classList.remove("hide");
    disableboxes();
};

//winner pattern logic
const winPatterns=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
//function
const checkWinner= ()=>{
for(pattern of winPatterns) {
    // console.log(box[pattern[0]].innerText,box[pattern[1]].innerText,box[pattern[2]].innerText);
    let val1=box[pattern[0]].innerText;
    let val2=box[pattern[1]].innerText;
    let val3=box[pattern[2]].innerText;
    if(val1!=""&&val2!=""&&val3!=""){
        if(val1===val2 && val2===val3){
       showWinner(val1);
        }
        else if(click==9){
            winbtn.innerText=`NOBODY WON`;
            winbtn.classList.remove("hide");
        }
    }
}
}
resetbtn.addEventListener("click",resetAll);



