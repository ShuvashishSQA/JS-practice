function findGreatestNumberOfCandies(candies, extraCandy){
    const highestCandy = Math.max(...candies);

    return candies.map(candy=>candy + extraCandy >= highestCandy);
}

console.log(findGreatestNumberOfCandies([2,3,5,1,3], 5));