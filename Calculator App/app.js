let btnIn = document.querySelectorAll(".btnIn");
let allClear = document.querySelector("#allclear");
let clear = document.querySelector("#clear");
let dispVal = "";
let input = document.querySelector("input");
let equal = document.querySelector(".equal");

function disp(event) {
    if (dispVal.length < 14) {
        dispVal = dispVal.concat(event.target.innerText)
    }
    input.value = dispVal;
    console.log(dispVal);
    if (dispVal.length > 8) {
        input.style.fontSize = "3rem";
    }
    else {
        input.style.fontSize = "5rem";
    }

}

function allclear() {
    input.value = dispVal = "";
    console.log(dispVal);
}

function Clear(event) {

    dispVal = dispVal.slice(0, dispVal.length - 1);
    input.value = dispVal;
    console.log(dispVal);
    if (dispVal.length <= 8) {
        input.style.fontSize = "5rem";
    }

}

function evualate() {
    try {
        let ans = eval(dispVal);
        input.value = ans;
    } catch {
        input.style.fontSize = "3rem";
        input.value = "SyntaxError";
    }


}


for (btn of btnIn) {
    btn.addEventListener("click", disp);
}

allClear.addEventListener("click", allclear);
clear.addEventListener("click", Clear);
equal.addEventListener("click", evualate);