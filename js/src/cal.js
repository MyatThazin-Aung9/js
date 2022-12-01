let btn = document.getElementById("btncalculate");
let ansresult = document.getElementById("result");
let finalResult;

btn.addEventListener("click",function(){
    let num1 = document.getElementById("firstNum");
    let num2 = document.getElementById("secNum");
    let operator = document.getElementById("operation");
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
});