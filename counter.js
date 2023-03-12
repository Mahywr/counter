const incrementBtn = document.querySelector(".increment");
const counterValue = document.querySelector(".counter span");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset")
let count = 0;
function incFunction(){
    count++
    counterValue.textContent=count;
}
function decFunction(){
    count -- 
    counterValue.textContent=count;
}
function resFunction(){
    count =0 
    counterValue.textContent=count;
}
incrementBtn.addEventListener("click", incFunction);
decrementBtn.addEventListener("click", decFunction);
resetBtn.addEventListener("click" , resFunction);


console.log(incrementBtn)
console.log(counterValue.textContent)