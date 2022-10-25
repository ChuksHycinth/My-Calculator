// to declear the function of calculate
function calculate() {
    // parseInt(convert string to integer)
    let value1 = parseInt(document.getElementById("value-1").value);
    let value2 = parseInt(document.querySelector("#value-2").value);

    let oper = document.querySelector("#operator").value;

    let calc;

    if(oper==="add") {
        calc = value1 + value2;
    }else if(oper==="sub") {
        calc = value1 - value2;
    }else if(oper==="div") {
        calc = value1 / value2;
    }else if(oper=="mul") {
        calc = value1 * value2;
    }else if(oper==="pow") {
        calc = value1**value2;
    }else {
        calc = "input not valid";
    }

    // selecting our-result and setting the .innerHTML = calc
    document.querySelector(".our-result").innerHTML = calc;
}