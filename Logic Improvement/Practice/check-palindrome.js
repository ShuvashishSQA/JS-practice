function isPalindrome(input){

    if(typeof input !== "string"){
        console.log("Please provide an string");
        //return false;
    }

    let reverseInput = "";

    for(let i = input.length - 1; i >= 0; i --){
        reverseInput += input[i];
    }
    return input === reverseInput;
}

console.log(isPalindrome("madam"));
