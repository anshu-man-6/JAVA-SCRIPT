// // // // let ans="Me and My Mother and Mother in law in Museaum";
// // // // // let ans1=" GL bajaj";
// // // // // console.log(ans.concat(ans1));
// // // // // console.log(ans+ans1);
// // // // let res =ans.replaceAll("M" , "Y");
// // // // console.log(res);
// // // let str=prompt("Enter your full Name");
// // // let res="@"+str+str.length;
// // // console.log("your Username is:",res);
// // // let food=["chips","tomatos","momos","bhelpuri","munchurien"];
// // let companies=["bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// // let del=companies.shift();
// // console.log("1.deleted",del);
// // let Del=companies.splice(1,1,"Ola");
// // console.log("2.",companies);
// // let val=companies.push("Amazon");
// // console.log("3.",companies);
// // function  myfunction (str) {
// //     let count=0;
// //     for (const char of str) {
// //         if(char ==="a"|| char==="e"|| char==="i"|| char==="o"|| char==="u"){
// //             count++; }}
// //     console.log("The total Value of Vowels are",count);}  
// let arr=[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val*val);
// });

// alert("Warning!");
// let btn=document.createElement("Button");
// btn.innerText="Click Me!";
// btn.style.backgroundColor="red";
// btn.style.Color="white";
// document.querySelector("body").prepend(btn);
// let nclass=document.querySelector("p");















// let modebtn=document.querySelector("#modebttn");
// let currMode="light";
// modebtn.addEventListener("click", ()=>{
//     if(currMode=="light"){
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor="black";

//     }
//     else{
//         currMode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currMode);
// });





















let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#Reset");
let turnO=true;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
       if(turnO){
        box.innerText="O";
        turnO=false;
       }
       else{
        box.innerText="X";
        turnO=true;
       }
       box.disabled=true;

       checkwinners();
    });
   
});

const checkwinners= ()=>{
    for ( let pattern of winPatterns)
    {
      let pos1val=boxes[pattern[0]].innerText;
      let pos2val=boxes[pattern[1]].innerText;
      let pos3val=boxes[pattern[2]].innerText;



      if (pos1val!=""&& pos2val!=""&& pos3val!="") {
        if (pos1val===pos2val && pos2val===pos3val) {
            alert("Winner",pos1val);
        }
      }
    }
}