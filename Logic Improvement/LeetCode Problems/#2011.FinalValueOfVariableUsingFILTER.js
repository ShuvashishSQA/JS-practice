function finalValueCount(operations){
    const increment = operations.filter(operation => operation === "X++" || operation === "++X").length;
    const decrement = operations.filter(operation => operation === "X--" || operation === "--X").length;  //Shift + Alt + Down Arrow to duplicate a line
    return increment - decrement;
}

console.log(finalValueCount(["--X","X++","X++","++X"]));