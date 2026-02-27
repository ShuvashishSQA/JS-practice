let inputString ="Hellow World";

function reverseString(input){
    let reverse ="";
    
    for (let i = input.length - 1; i >= 0 ;i--){
        reverse += input[i];
    }

    return reverse;
}

console.log(reverseString(inputString));