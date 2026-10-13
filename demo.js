let num1Input=document.getElementById("num1");
let num2Input=document.getElementById("num2");
let addBtn=document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let mulBtn = document.getElementById("mulBtn");
let divBtn = document.getElementById("divBtn");
let resultHeading=document.getElementById("result");

addBtn.addEventListener("click", function(){
    let n1 = Number(num1Input.value);
    let n2 = Number(num2Input.value);
    resultHeading.innerText = "Result: " + (n1 + n2);
});
subBtn.addEventListener("click", function(){
    let n1 = Number(num1Input.value);
    let n2 = Number(num2Input.value);
    resultHeading.innerText = "Result:"+(n1 - n2);
});
mulBtn.addEventListener("click", function() {
    let n1 = Number(num1Input.value);
    let n2 = Number(num2Input.value);
    resultHeading.innerText = "Result: " + (n1 * n2);
});
divBtn.addEventListener("click", function() {
    let n1 = Number(num1Input.value);
    let n2 = Number(num2Input.value);
    
    if (n2 === 0) {
        resultHeading.innerText = "Cannot divide by 0!";
    } else {
        resultHeading.innerText = "Result: " + (n1 / n2);
    }
});
 

 
