function findHighestCandy(candies){

    const highestCandyCount = Math.max(...candies);
    return highestCandyCount;
}

console.log(findHighestCandy([2,3,5,1,3]));


function findGreatestNumberOfCandies(candies, extraCandy){

    let finalResult = [];

    const highestCandyCount = findHighestCandy(candies);

    for(const candy of candies){
        finalResult.push(candy + extraCandy >= highestCandyCount);
    }

    return finalResult;
}

console.log(findGreatestNumberOfCandies([2,3,5,1,3], 3));