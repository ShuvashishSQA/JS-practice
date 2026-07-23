function finalValueCount1(operations){
    
const finalResult = operations.reduce((finalValue, operation)=> {
    if (operation === "X++" || operation === "++X") return finalValue + 1;
    if (operation === "X--" || operation === "--X") return finalValue - 1;
}, 0);

return finalResult;
}

console.log(finalValueCount1(["--X","X++","X++"]));