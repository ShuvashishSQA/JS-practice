function finalValueCount(operations){
    let finalValue = 0;

    for (const operation of operations) {
        if (operation === "++X" || operation === "X++"){
            finalValue += 1;
        }
        else if (operation === "--X" || operation === "X--") {
            finalValue -= 1;
        }
    }

    return finalValue;
}

console.log(finalValueCount(["--X","X++","X++"]));
