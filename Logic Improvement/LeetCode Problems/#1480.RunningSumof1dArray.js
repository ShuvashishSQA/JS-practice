function runningSumofArray(numbers){
    const runningSum = [];
    let runningTotal = 0;
    
    for (let i = 0; i < numbers.length; i++){
        runningTotal += numbers[i];
        runningSum.push(runningTotal);    
    }
    return runningSum;
}
console.log(runningSumofArray([1,2,5,8]));

//solution using for--of loop-----//

// function runningSumofArray1(numbers){
//     const runningSum = [];
//     let runningTotal = 0;
    
//     for (const number of numbers){
//         runningTotal += number;
//         runningSum.push(runningTotal);
//     }

//     return runningSum;
// }

// console.log(runningSumofArray1([1,2,5,8]));