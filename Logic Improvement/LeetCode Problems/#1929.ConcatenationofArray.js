function concatanateNumber(number){

    return number.concat(number);
}

number = [1,2,1];
console.log(concatanateNumber(number));

//-------Solution with Manual Looping-------//

// function concatanateNumberWithLoop(number){
//     const answer = [];

//     for (const numbers of number){
//         answer.push(numbers);
//     }

//     for (const numbers of number){
//         answer.push(numbers);
//     }

//     return answer;
// }

// console.log(concatanateNumberWithLoop(number))