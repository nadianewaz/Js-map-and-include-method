// == double output value == 
// let numbers = [3,5,7,9];
// let output = numbers.map(num => num *2);
// console.log(output);

// == square value == 
// let numbers = [5,6,8,9];
// let result = numbers.map(number => number * number);
// console.log(result);

// == simple short project (includes) == 
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function(){
    let input = document.getElementById("input").value;
    let text = document.getElementById("text").innerText;
    let showResult = document.getElementById("showResult");
    let inputResult = text.includes(input);
    if(inputResult == true){
        showResult.innerHTML = "data found";
    }
    else{
        showResult.innerHTML = "data not found";
    }

});