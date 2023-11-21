function calc() {
    let type_tovara = document.getElementById("tovar");
    let count = document.getElementById("count");
    let result = document.getElementById("result");
    let price = 0;
    price += parseInt(type_tovara.options[type_tovara.selectedIndex].value);
    if(count.value>0)
    price = parseInt(count.value) * price;
    else alert("Укажите верное количество");
    result.innerHTML = price;
}
function sbros()
{
    let result = document.getElementById("result");
    let price=0;
    result.innerHTML=price;
}
window.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button");
    let c = document.getElementById("button2");
    
    b.addEventListener("click", calc);
    c.addEventListener("click", sbros);
});