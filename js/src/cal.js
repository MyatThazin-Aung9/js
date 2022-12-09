let btn = document.getElementById("btncalculate");
let ansresult = document.getElementById("result");
let numOneError =document.getElementById("numOneError");
let numTwoError =document.getElementById("numTwoError");
let operatorError =document.getElementById("opeartorError");
let finalResult;
let numOneStatus,
    numTwoStatus,
    operatorStatus = false;

    numOneError.style.display = "none";
    numTwoError.style.display = "none";
    operatorError.style.display = "none";

btn.addEventListener("click",function(){
    let num1 = document.getElementById("firstNum");
    let num2 = document.getElementById("secNum");
    let operator = document.getElementById("operation");

    checkValidation(num1, num2, operator);

    if (numOneStatus == false && numTwoStatus == false && operatorStatus == false) {
        num1 = parseInt(num1.value);
        num2 = parseInt(num2.value);

        console.log(typeof num1);
        console.log(typeof num2);
        switch(operator.value){
            case "add":
                finalResult = num1 + num2;
                break;
            case "minus":
                finalResult = num1 - num2;
                break;
            case "multiply":
                finalResult = num1 * num2;
                break;
            case "division":
                finalResult = num1 / num2;
                break;
            case "default":
                console.log("Operation error");
                break;
        }
        console.log(finalResult);
        ansresult.innerHTML = finalResult;
    }
});

function checkValidation(num1, num2, operator) {
    if (num1.value == "" || num1.value == null || num1.value == undefined) {
        numOneError.style.display = "block";
        numOneStatus = true;
    }else{
        numOneError.style.display = "none";
        numOneStatus = false;
    }

    if (num2.value == "" || num2.value == null || num2.value == undefined) {
        numTwoError.style.display = "block";
        numTwoStatus = true;
    }else{
        numTwoError.style.display = "none";
        numTwoStatus = false;
    }

    if (operator.value == "empty") {
        operatorError.style.display = "block";
        operatorStatus = true;
    }else{
        operatorError.style.display = "none";
        operatorStatus = false;
    }
}