function maximumWealth(wealthMatrix) {
    let highestWealth = 0;

    for(const accounts of wealthMatrix){
        const totalWealth = accounts.reduce((sum, account)=> sum + account, 0);
        
        highestWealth = Math.max(highestWealth, totalWealth);
    }
    return highestWealth;
}

console.log(maximumWealth([[1,2], [2,3], [1,7]]));




function maximumWealth(wealthMatrix) {
    let highestWealth = 0;

    for(let i = 0; i < wealthMatrix.length; i++){
        
        let wealthCount = 0;

        for( let j = 0; j < wealthMatrix[i].length; j++){
            wealthCount += wealthMatrix[i][j];
        }

                //using Math.max to replace if-else
       //highestWealth = Math.max(highestWealth, wealthCount);

        if(wealthCount <= highestWealth){
            continue;
        }
        else{
            highestWealth = wealthCount;
        }

    }

    return highestWealth;
}

//console.log(maximumWealth([[1,2], [2,3], [1,7]]));