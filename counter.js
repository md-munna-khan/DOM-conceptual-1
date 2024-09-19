let sum= 0;
function clickMe (){
const h1 = document.getElementById("count");

sum ++
h1.innerText = sum;
}

const minusBtn = document.getElementById("minus-btn");
const mnsBtn = minusBtn.addEventListener('click', function(){
    const h1 = document.getElementById("count");
    sum --;
    h1.innerText = sum;
})