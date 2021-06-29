let span=document.querySelector("span");
const decreaseBtn=document.querySelector("#decrease__btn");
const resetBtn=document.querySelector("#reset__btn");
const increaseBtn=document.querySelector("#increase__btn");


function resetValue(){
    span.innerText=0;
}

function increaseValue(){
    let num=span.innerText;
    Number(num);
    num++;
    span.innerText=num;
}

function decreaseValue(){
    let num=span.innerText;
    Number(num);
    num--;
    span.innerText=num;
}

resetBtn.addEventListener("click",resetValue);

increaseBtn.addEventListener("click",increaseValue);

decreaseBtn.addEventListener("click",decreaseValue);