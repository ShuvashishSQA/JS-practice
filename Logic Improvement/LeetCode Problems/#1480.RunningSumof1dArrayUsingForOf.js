//solution using for--of loop-----//

function runningSumofArray(numbers){
    const runningSum = [];
    let runningTotal = 0;
    
    for (const number of numbers){
        runningTotal += number;
        runningSum.push(runningTotal);
    }

    return runningSum;
}

console.log(runningSumofArray([1,2,5,8]));